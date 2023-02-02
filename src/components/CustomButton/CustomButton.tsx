import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface ICustomButtonProps {
  title: string;
}

function CustomButton({ title }: ICustomButtonProps) {
  return (
    <button className="group mt-4 py-2 flex items-center gap-2 border-b border-transparent hover:border-black transition-all duration-100 ease-out">
      {title}
      <ArrowLongRightIcon className="font-extralight w-4 opacity-0 group-hover:opacity-100 transition-all duration-100 ease-out" />
    </button>
  );
}

export default CustomButton;
