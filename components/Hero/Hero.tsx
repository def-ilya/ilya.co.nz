import Image from "next/image";
import Person from "./Person";
import { Ubuntu, Ubuntu_Mono } from "@next/font/google";
import { Canvas } from "@react-three/fiber";
import { lazy } from "react";
import { Float } from "@react-three/drei";
const PersonModel = lazy(() => import("./Person"));
import { Glow } from "../Canvas/MasterCanvas";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 relative flex items-center justify-center"></div>
      <div className="w-1/2 relative flex flex-col justify-center">
        <p className={"text-5xl mb-12 font-mono"}>
          hey, i’m ilya,
          <br /> full-stack dev.
        </p>
        <p className="text-5xl">
          enthusiast first,
          <br /> professional second.
        </p>
      </div>
    </div>
  );
}
