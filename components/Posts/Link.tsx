import { useGLTF } from "@react-three/drei";

export default function LinkModel() {
  const model = useGLTF("http://localhost:3000/models/link.gltf");
  return <primitive object={model.scene} />;
}
