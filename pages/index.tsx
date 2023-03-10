import Head from "next/head";

import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";
import Stack from "@/components/Stack/Stack";
import Contact from "@/components/Contact/Contact";
import Socials from "@/components/Socials/Socials";

import Orb from "@/components/Orb/Orb";
import Items from "@/components/Scene/Items";
import { useState, Suspense } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";

import { createClient } from "next-sanity";
import { config } from "../lib/config";

import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../components/Scene/Loader"), {
  ssr: false,
});

type Props = {
  data: { posts: Post[] };
};

interface Post {
  link: string;
  title: string;
  desc: string;
}

export default function Home({ data }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>ilya.co.nz</title>
        <meta name="description" content="hey, i'm ilya, full-stack dev." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={" bg-dark-blue text-light-clay font-sans"}>
        <div className="fixed top-0 left-0 right-0 h-screen w-screen z-20">
          <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ depth: false }}
            camera={{ position: [0, 0, 15], fov: 45 }}
          >
            <Loader onLoaded={setLoaded} />
            <color attach="background" args={["black"]}></color>
            <ScrollControls
              pages={5}
              distance={1}
              damping={6}
              horizontal={false}
              infinite={false}
            >
              <Orb />
              <Scroll html>
                <div className="w-screen">
                  <div className="max-w-[1280px] mx-auto">
                    <Hero />
                    <Posts posts={data.posts} />
                    <Stack />
                    <Contact />
                    <Socials />
                  </div>
                </div>
              </Scroll>
              <Suspense>
                <Items />
              </Suspense>
            </ScrollControls>
          </Canvas>
        </div>
      </main>
    </>
  );
}

const client = createClient(config);

export async function getStaticProps() {
  const data = { posts: [] };

  data.posts = await client.fetch(`*[_type == "post"]`);
  return {
    props: {
      data,
    },
  };
}
