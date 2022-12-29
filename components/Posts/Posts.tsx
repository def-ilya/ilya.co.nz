import PostItem from "./PostItem";
import PostsGradient from "../../public/assets/Posts-Gradient.svg";
import Image from "next/image";

export default function Posts() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap mx-24 gap-16 relative my-auto">
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
