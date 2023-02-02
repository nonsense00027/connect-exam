import React from "react";

interface IColorPaletteProps {
  id: string;
  color: string;
}

function ColorPalette({ id, color }: IColorPaletteProps) {
  return <div className={`w-3.5 h-3.5 rounded-full border ${color}`} />;
}

export default ColorPalette;
