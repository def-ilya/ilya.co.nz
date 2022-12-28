import PostItem from "./PostItem";
import PostsGradient from "../../public/assets/Posts-Gradient.svg";
import Image from "next/image";

import { lazy, Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { View, Bounds, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AmbientLight } from "three";
const LinkModel = lazy(() => import("./Link"));

export default function Posts() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap mx-24 gap-16 relative">
        <div className="absolute top-1/2 first-letter:z-0">
          <Image
            className="-mt-[12%]"
            alt="a pretty gradient :D"
            src={PostsGradient}
          />
        </div>

        <PostItem
          title="Using AI to Herd Cats"
          description="Artficial intelligence is used to count through a large segment of the population and collect their cats into NFTs."
        />
        <PostItem
          title="Using AI to Herd Cats"
          description="Artficial intelligence is used to count through a large segment of the population and collect their cats into NFTs."
        />
        <PostItem
          title="Using AI to Herd Cats"
          description="Artficial intelligence is used to count through a large segment of the population and collect their cats into NFTs."
        />
        <PostItem
          title="Using AI to Herd Cats"
          description="Artficial intelligence is used to count through a large segment of the population and collect their cats into NFTs."
        />
      </div>
    </div>
  );
}
