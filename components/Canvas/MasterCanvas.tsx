import {
  ScrollControls,
  Scroll,
  GradientTexture,
  OrbitControls,
  useScroll,
  Billboard,
  Bounds,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  SelectiveBloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import { LayerMaterial, Depth } from "lamina";
import Person from "../Hero/Person";
import { Vector3 } from "three";
type Props = {
  page: number;
};

export default function MasterCanvas({ page }: Props) {
  const person = useRef(null);
  useEffect(() => {
    if (page === 1) {
      console.log(person.current);
    }
    console.log(page);
  }, [page]);
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={["black"]} />
        <EffectComposer>
          <SelectiveBloom
            mipmapBlur
            exposure={0}
            luminanceThreshold={-1.4}
            luminanceSmoothing={0.99}
            height={300}
          />
          <Noise opacity={0.03} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <Person ref={person} position={new THREE.Vector3(-1.5, 0, -4)} />
        <Bounds fit clip observe damping={6} margin={1.0}>
          <ambientLight intensity={0.8} />
          <hemisphereLight intensity={0.5} color="white" groundColor="black" />
          <Sphere
            color="#763CAC"
            amount={20}
            emissive="#763CAC"
            glow="#763CAC"
            size={0.25}
          />
        </Bounds>
      </Canvas>
    </>
  );
}

type SphereProps = {
  size: number;
  amount: number;
  color: string;
  emissive: string;
  glow: string;
};
const Sphere = ({
  size = 1,
  amount = 50,
  color = "white",
  emissive,
  glow,
  ...props
}: SphereProps) => (
  <Float
    speed={1} // Animation speed, defaults to 1
    rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
    floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
  >
    <mesh {...props}>
      <sphereGeometry args={[size, 128, 128]} />

      <MeshDistortMaterial
        transparent={true}
        blending={THREE.MultiplyBlending}
        emissive="#763CAC"
        emissiveIntensity={0}
        toneMapped={false}
        distort={0.5}
        speed={2}
      />

      <Glow
        scale={size * 1.2}
        near={-2}
        far={1.4}
        color={glow || emissive || color}
      />
    </mesh>
  </Float>
);

type GlowProps = {
  color?: string;
  scale?: number;
  near?: number;
  far?: number;
};

export const Glow = ({
  color,
  scale = 0.5,
  near = -2,
  far = 1.4,
}: GlowProps) => (
  <Billboard>
    <mesh>
      <circleGeometry args={[2 * scale, 256]} />

      <LayerMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        blendEquation={THREE.AddEquation}
        blendSrc={THREE.SrcAlphaFactor}
        blendDst={THREE.DstAlphaFactor}
      >
        <Depth
          colorA={color}
          colorB="black"
          alpha={1}
          mode="normal"
          near={near * scale}
          far={far * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB="black"
          alpha={0.5}
          mode="add"
          near={-40 * scale}
          far={far * 1.2 * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB="black"
          alpha={1}
          mode="add"
          near={-15 * scale}
          far={far * 0.7 * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB="black"
          alpha={1}
          mode="add"
          near={-10 * scale}
          far={far * 0.68 * scale}
          origin={[0, 0, 0]}
        />
      </LayerMaterial>
    </mesh>
  </Billboard>
);
