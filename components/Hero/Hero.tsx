import Image from "next/image";

export default function Hero() {
  return (
    <div className="pb-16 md:pb-0 h-screen flex flex-col lg:flex-row justify-center items-center">
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
