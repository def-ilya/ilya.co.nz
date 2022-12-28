import Image from "next/image";
import { Ubuntu, Ubuntu_Mono } from "@next/font/google";

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
      <div className="w-1/2 relative flex items-center justify-center">
        <Image
          className="relative"
          layout="fill"
          src={"/assets/Hero-Ilya.svg"}
        />
      </div>
      <div className="w-1/2 relative flex flex-col justify-center">
        <p className={"text-5xl mb-12 " + ubuntuMono.className}>
          hey, i’m ilya,
          <br /> full-stack dev.
        </p>
        <p className="text-5xl">enthusiast first, professional second.</p>
      </div>
    </div>
  );
}
