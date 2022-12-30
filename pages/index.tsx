import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero/Hero";
import Posts from "../components/Posts/Posts";
import Stack from "@/components/Stack/Stack";
import Orb from "@/components/Orb/Orb";
import Cup from "@/components/Stack/Cup";
import { Waypoint } from "react-waypoint";
import { useState, useEffect } from "react";

import {
  Billboard,
  Bounds,
  MeshDistortMaterial,
  Float,
  ScrollControls,
  Scroll,
  Html,
} from "@react-three/drei";

import { motion as motion3d } from "framer-motion-3d";

import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerWidth });
    });
  }, []);

  const [stackActive, setStackActive] = useState(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={" bg-dark-blue text-light-clay font-sans"}>
        <div className="fixed top-0 left-0 right-0 h-screen w-screen z-20">
          <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
            <color attach="background" args={["black"]}></color>
            <ScrollControls
              pages={3}
              distance={1}
              damping={6}
              horizontal={false}
              infinite={false}
            >
              <Orb emphasize={false} />

              <Scroll html>
                <div className="w-screen">
                  <div className="max-w-[1280px] mx-auto">
                    <Hero />

                    <Posts />

                    <Stack
                      active={stackActive}
                      setActive={(val) => setStackActive(val)}
                    />
                  </div>
                </div>
              </Scroll>
              <Cup active={stackActive} />
            </ScrollControls>
          </Canvas>
        </div>
      </main>
    </>
  );
}
