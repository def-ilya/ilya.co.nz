import { Ubuntu } from "@next/font/google";
import Image from "next/image";

import { lazy, Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { View, Bounds, Center, OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";
const LinkModel = lazy(() => import("./Link"));

type Props = {
  title?: string;
  description?: string;
  link?: string;
};

export default function PostItem({ title, description, link }: Props) {
  return (
    <div className="max-w-[45%] mx-auto z-10">
      <h3 className={"text-4xl mb-3 ml-2 font-bold"}>{title}</h3>
      <div className="relative px-6 py-4">
        <Image
          alt="a noisy background"
          className="absolute top-0 left-0 z-0"
          layout="fill"
          src={"/assets/Noisy-BG.png"}
        />
        <div className="text-lg relative z-10">{description}</div>
        <a
          href="https://blog.hubspot.com/marketing/how-to-start-a-blog"
          className="absolute top-0  right-0 z-0 w-24 h-24"
        >
          <Canvas
            className="-mt-[40%] ml-[40%]"
            onCreated={(state) => state.gl.setClearColor("black", 0.0)}
            camera={{ position: [0, 0, 4] }}
          >
            <LinkModel />
          </Canvas>
        </a>
      </div>
    </div>
  );
}
