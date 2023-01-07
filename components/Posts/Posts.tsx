import PostItem from "./PostItem";
import PostsGradient from "../../public/assets/Posts-Gradient.svg";
import Zoom from "../../public/assets/zoom.svg";
import Image from "next/image";

import { useEffect } from "react";

type Props = {
  posts: Post[];
};

interface Post {
  link: string;
  title: string;
  desc: string;
}

export default function Posts({ posts }: Props) {
  useEffect(() => {
    console.log(posts);
    return () => {};
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="flex flex-wrap mx-10 lg:mx-24 gap-10 lg:gap-16 relative my-auto">
        <div className="absolute top-1/2 first-letter:z-0">
          <Image
            className="-mt-[12%] hidden lg:block"
            alt="a pretty gradient :D"
            src={PostsGradient}
          />
        </div>
        {posts.map((post, i) => {
          if (i < 5)
            return (
              <PostItem
                href={post.link}
                title={post.title}
                description={post.desc}
              />
            );
        })}
        <a
          className="w-full -mt-10 ml-2 sm:ml-24 md:ml-28 lg:ml-6 text-purple text-md flex items-center transition hover:text-white hover:-translate-y-2"
          href="https://www.linkedin.com/in/k0t/recent-activity/posts/"
        >
          Read More
          <Image className="ml-1 hover:scale-105 " src={Zoom} alt="" />
        </a>
      </div>
    </div>
  );
}
