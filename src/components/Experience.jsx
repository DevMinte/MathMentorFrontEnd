import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 800 : false;
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <group scale={isMobile ? 1.2 : 1}>
          <Book />
        </group>
      </Float>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
