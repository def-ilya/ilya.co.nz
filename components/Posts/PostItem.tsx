import { Ubuntu } from "@next/font/google";
import Image from "next/image";

type AppProps = {
  title?: string;
  description?: string;
  link?: string;
};

export default function PostItem({ title, description, link }: AppProps) {
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
        <div className="absolute top-0  right-0 z-0 w-24 h-24">
          <Image
            alt="link icon"
            layout="fill"
            objectFit="contain"
            className="-mt-[40%] ml-[40%]"
            src={"/assets/link-dynamic-gradient.png"}
          />
        </div>
      </div>
    </div>
  );
}
