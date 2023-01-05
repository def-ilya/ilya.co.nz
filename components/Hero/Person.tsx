import Image from "next/image";
import { Ubuntu, Ubuntu_Mono } from "@next/font/google";
import * as THREE from "three";

import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { ImageBitmapLoader } from "three/src/loaders/ImageBitmapLoader";
import { useLayoutEffect, useRef, forwardRef } from "react";

type Props = {
  position: THREE.Vector3;
};
export default function PersonModel({ position }: Props) {
  const colorMap = useLoader(TextureLoader, "/assets/Hero-Ilya.png");
  colorMap.encoding = THREE.sRGBEncoding;

  return (
    <mesh position={position}>
      <planeGeometry args={[1, 1.35]} />
      <meshBasicMaterial
        toneMapped={false}
        onUpdate={(self) => (self.needsUpdate = true)}
        transparent={true}
        map={colorMap}
      />
    </mesh>
  );
}
