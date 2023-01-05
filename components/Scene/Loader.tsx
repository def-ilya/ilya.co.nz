import { useProgress, Html } from "@react-three/drei";
import { useEffect, useState, SetStateAction, Dispatch } from "react";

type Props = {
  onLoaded: Dispatch<SetStateAction<boolean>>;
};
export default function Loader({ onLoaded }: Props) {
  const progress = useProgress();
  useEffect(() => {
    if (progress.loaded === 13) {
      console.log("loaded");
      setTimeout(() => {
        onLoaded(true);
      }, 500);
    }
  }, [progress.progress]);

  return (
    <>
      {/* {progress.progress !== 100 && (
        <Html center>{progress.progress} % loaded</Html>
      )} */}
    </>
  );
}
