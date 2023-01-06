import Image from "next/image";
import LogoImage from "./LogoImage";
import { motion, useMotionValue, useTransform } from "framer-motion";
export default function Socials() {
  return (
    <div className="pb-16 md:pb-0 h-screen min-w-screen flex justify-center items-center">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="mx-10 text-3xl md:text-4xl lg:text-6xl mb-6 font-bold">
          stalk my socials here
        </h2>
        <motion.div className="relative max-w-fit mx-auto flex justify-center bg-black bg-opacity-20 backdrop-blur-md py-3 px-6 rounded-3xl">
          <motion.div className="z-10 flex mx-auto gap-6 justify-center items-center">
            <LogoImage src="/assets/logos/linkedin.svg" href="#" />
            <LogoImage src="/assets/logos/github.svg" href="#" />
            <LogoImage src="/assets/logos/discord.svg" href="#" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
