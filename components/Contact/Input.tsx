import { Dispatch, SetStateAction } from "studio/node_modules/@types/react";

type Props = {
  placeholder: string;
  value: string;
  name: string;
  setter: (val: string) => void;
};

export default function Input({ placeholder, value, name, setter }: Props) {
  return (
    <div
      //   style={{ minWidth: placeholder.length / 2 + "rem" }}
      className="flex relative font-mono"
    >
      <input
        name={name}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
        maxLength={70}
        className="bg-black absolute top-0 left-0 z-10 w-full focus-visible:outline-none"
        type="text"
      />
      <p className="w-full whitespace-pre">{value ? value : placeholder}</p>
    </div>
  );
}
