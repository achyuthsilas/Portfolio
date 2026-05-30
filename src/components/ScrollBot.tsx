import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

const MODEL_URL = "/models/tesla_bot.glb";

type Target = {
  x: number;
  y: number;
  z: number;
  scale: number;
  rotY: number;
  rotZ: number;
};

// One target per section id, in document order
const ORDER = [
  "intro",
  "about",
  "skills",
  "experience",
  "projects",
  "achievements",
  "contact",
] as const;

const TARGETS: Record<(typeof ORDER)[number], Target> = {
  // Anchored to right corner; rotY=-0.26 (~15°) turns face toward the left content area
  intro:        { x:  2.35, y: -1.17, z:  1.15, scale: 2.50, rotY: -0.26, rotZ: 0 },
  // Full body shifted further left; content starts at ~40vw so they don't overlap
  about:        { x: -1.3,  y:  0.0,  z:  0.0,  scale: 1.2,  rotY:  0.15, rotZ: 0 },
  // Centered torso framing under the skills grid
  skills:       { x:  0.0,  y: -1.4,  z:  0.4,  scale: 1.85, rotY:  0.0,  rotZ: 0 },
  // Head only, right-side profile. y = 0.4 - 0.8*scale centers the head at the camera
  // center (y=0.4); rotY=-1.2 (~69° CW from above) shows the bot's right ear/cheek.
  experience:   { x:  0.9,  y: -2.8,  z:  2.8,  scale: 3.96, rotY: -1.2,  rotZ: 0 },
  // Full body on right, slightly facing the left-aligned project list
  projects:     { x:  1.75, y: -1.45, z:  0.2,  scale: 2.0,  rotY: -0.35, rotZ:  0.00 },
  achievements: { x: -1.85, y: -1.35, z:  0.1,  scale: 1.35, rotY: -0.3,  rotZ: 0 },
  // Centered, upper body only (head + torso framed between the two contact columns)
  contact:      { x:  0.0,  y: -0.95, z:  1.05, scale: 1.85, rotY:  0.0,  rotZ: 0 },
};

// Dark mode matches light mode exactly — same position, same framing.
const INTRO_DARK: Target = { ...TARGETS.intro };

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function lerpTarget(a: Target, b: Target, t: number): Target {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    z: lerp(a.z, b.z, t),
    scale: lerp(a.scale, b.scale, t),
    rotY: lerp(a.rotY, b.rotY, t),
    rotZ: lerp(a.rotZ, b.rotZ, t),
  };
}
function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function Bot() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const current = useRef<Target>({ ...TARGETS.intro });
  const target = useRef<Target>({ ...TARGETS.intro });
  const { scene } = useGLTF(MODEL_URL);

  // Bone refs — T-pose (Skills) only
  const leftArmRef       = useRef<THREE.Object3D | null>(null);
  const rightArmRef      = useRef<THREE.Object3D | null>(null);
  const leftShoulderRef  = useRef<THREE.Object3D | null>(null);
  const rightShoulderRef = useRef<THREE.Object3D | null>(null);
  const leftArmBindQ      = useRef(new THREE.Quaternion());
  const rightArmBindQ     = useRef(new THREE.Quaternion());
  const leftShoulderBindQ  = useRef(new THREE.Quaternion());
  const rightShoulderBindQ = useRef(new THREE.Quaternion());
  const armT    = useRef(0); // 0 = resting, 1 = T-pose (Skills)
  const identityQ = useRef(new THREE.Quaternion()); // (0,0,0,1) = Mixamo T-pose

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.name === "mixamorig_LeftArm_08")        { leftArmRef.current = obj;       leftArmBindQ.current.copy(obj.quaternion); }
      if (obj.name === "mixamorig_RightArm_027")      { rightArmRef.current = obj;      rightArmBindQ.current.copy(obj.quaternion); }
      if (obj.name === "mixamorig_LeftShoulder_07")   { leftShoulderRef.current = obj;  leftShoulderBindQ.current.copy(obj.quaternion); }
      if (obj.name === "mixamorig_RightShoulder_026") { rightShoulderRef.current = obj; rightShoulderBindQ.current.copy(obj.quaternion); }
    });
  }, [scene]);

  // warm material tweak
  scene.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh && m.material) {
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.envMapIntensity = 1.1;
      mat.needsUpdate = true;
    }
  });

  useFrame((_, dt) => {
    // ---- read scroll & compute interpolated target ----
    const vh = window.innerHeight;
    const center = window.scrollY + vh / 2;

    type Rect = { id: (typeof ORDER)[number]; top: number; bot: number };
    const rects: Rect[] = [];
    for (const id of ORDER) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      rects.push({ id, top: r.top + window.scrollY, bot: r.bottom + window.scrollY });
    }

    let next: Target = TARGETS.intro;

    if (rects.length) {
      const isDark = document.documentElement.dataset.theme !== "light";

      // Find section at viewport center
      let best = rects.findIndex((r) => center >= r.top && center < r.bot);
      if (best === -1) {
        let bestDist = Infinity;
        for (let i = 0; i < rects.length; i++) {
          const mid = (rects[i].top + rects[i].bot) / 2;
          const d = Math.abs(mid - center);
          if (d < bestDist) { bestDist = d; best = i; }
        }
      }

      const bestId = rects[best].id;
      next = bestId === "intro" && isDark ? INTRO_DARK : TARGETS[bestId];

      // Blend smoothly across every adjacent section boundary.
      // For achievements→contact the blend is anchored so tBlend reaches 1
      // exactly when the contact section top hits the viewport top.
      for (let i = 0; i < rects.length - 1; i++) {
        const fromId = rects[i].id;
        const toId   = rects[i + 1].id;
        let band: number;
        let boundary: number;
        if (toId === "contact") {
          // blendEnd must equal contactTop + vh/2 so tBlend=1 exactly when
          // the contact section top scrolls into the viewport top.
          // boundary = blendEnd - band/2 = (contactTop + vh/2) - vh = contactTop - vh/2
          band = vh * 2.0;
          boundary = rects[i + 1].top - vh * 0.5;
        } else {
          band = vh * 1.5;
          const midA = (rects[i].top + rects[i].bot) / 2;
          const midB = (rects[i + 1].top + rects[i + 1].bot) / 2;
          boundary = (midA + midB) / 2;
        }
        const tBlend = Math.min(1, Math.max(0, (center - (boundary - band / 2)) / band));
        if (tBlend > 0 && tBlend < 1) {
          const fromTarget = fromId === "intro" && isDark ? INTRO_DARK : TARGETS[fromId];
          const toTarget   = TARGETS[toId];
          next = lerpTarget(fromTarget, toTarget, easeInOut(tBlend));
          break;
        }
      }
    }

    target.current = next;

    // ---- ease current toward target (slower = smoother) ----
    const k = Math.min(1, dt * 2.0);
    current.current = lerpTarget(current.current, target.current, k);

    if (groupRef.current) {
      groupRef.current.position.set(
        current.current.x,
        current.current.y,
        current.current.z,
      );
      groupRef.current.scale.setScalar(current.current.scale);
      groupRef.current.rotation.y = current.current.rotY;
      groupRef.current.rotation.z = current.current.rotZ;
    }
    // floating disabled globally — bot stays still
    if (innerRef.current) {
      innerRef.current.position.y = 0;
      innerRef.current.rotation.y = 0;
    }

    // ---- T-pose for Skills section ----
    const skillsRect = rects.find((r) => r.id === "skills");
    const inSkills   = !!skillsRect && center >= skillsRect.top + vh * 0.5 && center < skillsRect.bot;
    armT.current = lerp(armT.current, inSkills ? 1 : 0, Math.min(1, dt * 1.8));
    // Slerp from bind-pose quaternion → identity (Mixamo bind IS T-pose: arms horizontal)
    const tpT = armT.current;
    if (leftArmRef.current)
      leftArmRef.current.quaternion.slerpQuaternions(leftArmBindQ.current, identityQ.current, tpT);
    if (rightArmRef.current)
      rightArmRef.current.quaternion.slerpQuaternions(rightArmBindQ.current, identityQ.current, tpT);
    if (leftShoulderRef.current)
      leftShoulderRef.current.quaternion.slerpQuaternions(leftShoulderBindQ.current, identityQ.current, tpT * 0.4);
    if (rightShoulderRef.current)
      rightShoulderRef.current.quaternion.slerpQuaternions(rightShoulderBindQ.current, identityQ.current, tpT * 0.4);

  });

  return (
    <group ref={groupRef}>
      <group ref={innerRef}>
        <primitive object={scene} position={[0, -1, 0]} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_URL);

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[4, 6, 4]} intensity={1.8} color="#ffb86b" />
      <pointLight position={[-5, -2, -3]} intensity={1.2} color="#ff7a18" />
      <pointLight position={[0, 2, -6]} intensity={0.6} color="#ffd28a" />
    </>
  );
}

export function ScrollBot() {
  return (
    <div className="pointer-events-none fixed inset-0 z-5">
      <Canvas
        camera={{ position: [0, 0.4, 5.4], fov: 36 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Environment preset="sunset" />
          <Bot />
          <ContactShadows
            position={[0, -1.95, 0]}
            opacity={0.4}
            scale={10}
            blur={2.6}
            far={4}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
