import Image from "next/image";

import {
  motion,
  useMotionValue,
  MotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { SyntheticEvent } from "studio/node_modules/@types/react";

type Props = {};
export default function Stack({}: Props) {
  const badges = [
    "react.svg",
    "nextjs.svg",
    "nodejs.svg",
    "typescript.svg",
    "python.svg",
    "webflow.svg",
    "aws.svg",
    "firebase.svg",
    "shopify.svg",
    "docker.svg",
    "salesforce.svg",
  ];

  function handleMouse(
    x: MotionValue<number>,
    y: MotionValue<number>,
    event: SyntheticEvent
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set((event.clientX - rect.left) * 4);
    y.set((event.clientY - rect.top) * 4);
  }

  const ref = useRef(null);

  return (
    <motion.div className="h-screen min-w-screen flex justify-center items-center">
      <div className="m-auto flex flex-col justify-center items-center">
        <h2 className="mx-10  text-3xl md:text-4xl lg:text-6xl mb-16 font-bold">
          i&apos;m kind of a nerd.
        </h2>
        <motion.div
          ref={ref}
          className="flex justify-center items-center md:justify-start gap-8 max-w-xl md:max-w-2xl flex-wrap ml-8"
        >
          {badges.map((badge, i) => {
            const x = useMotionValue(200);
            const y = useMotionValue(200);

            const rotateX = useTransform(y, [0, 400], [45, -45]);
            const rotateY = useTransform(x, [0, 400], [-45, 45]);

            const springX = useSpring(rotateX, {
              stiffness: 1000,
              damping: 10,
            });
            const springY = useSpring(rotateY, {
              restDelta: 0,
            });
            return (
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverEnd={() => {
                  x.set(200);
                  y.set(200);
                }}
                onMouseMove={(e) => handleMouse(x, y, e)}
                key={i}
                style={{
                  perspective: 400,
                }}
                className={`bg-zinc-900 rounded-full p-3 ${
                  i === 0 ? "md:ml-[calc(100%/12)]" : ""
                }`}
              >
                <motion.div
                  style={{
                    rotateX: springX,
                    rotateY: springY,
                  }}
                  className="relative w-12 h-12 md:w-14 md:h-14"
                >
                  <Image
                    alt={badge}
                    className="object-scale-down"
                    fill
                    src={"/assets/logos/" + badge}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
