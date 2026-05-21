import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const MODEL_URL = "/models/tesla_bot.glb";

function Bot() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.35;
  });

  // Warm tint pass — make materials feel amber under the rim lights
  scene.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh && m.material) {
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.envMapIntensity = 1.1;
      mat.needsUpdate = true;
    }
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={1.6} position={[0, -1.6, 0]} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);

function Lights() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[4, 6, 4]} intensity={1.8} color="#ffb86b" />
      <pointLight position={[-5, -2, -3]} intensity={1.2} color="#ff7a18" />
      <pointLight position={[0, 2, -6]} intensity={0.6} color="#ffd28a" />
    </>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5.2], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Environment preset="sunset" />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
          <Bot />
        </Float>
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.45}
          scale={8}
          blur={2.4}
          far={3}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
}
