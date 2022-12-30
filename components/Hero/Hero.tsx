import Image from "next/image";
import Person from "./Person";
import { Ubuntu, Ubuntu_Mono } from "@next/font/google";

import { Glow } from "../Orb/Orb";

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
    <div className="h-screen flex flex-col lg:flex-row justify-center items-center">
      <div className="w-1/2 relative flex items-center justify-center">
        <div className="w-full h-full relative mb-10 ">
          {/* <Image
            fill
            className="object-scale-down"
            src="/assets/Hero-Ilya.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative flex flex-col justify-center">
        <p className="font-mono text-3xl mb-6 text-center lg:text-5xl lg:text-left lg:mb-12">
          hey, i’m ilya,
          <br /> full-stack dev.
        </p>
        <p className="text-3xl text-center lg:text-5xl  lg:text-left">
          enthusiast first,
          <br /> professional second.
        </p>
      </div>
    </div>
  );
}
