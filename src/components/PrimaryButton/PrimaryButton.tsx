import React from "react";

interface IPrimaryButtonProps {
  title: string;
}

function PrimaryButton({ title }: IPrimaryButtonProps) {
  return (
    <button className="w-full bg-orange text-white font-light text-lg py-1 rounded-sm">
      {title}
    </button>
  );
}

export default PrimaryButton;
