import React from "react";
import ColorPalette from "~/components/ColorPalette";
import { cardColors } from "~/shared/constants";

interface ICardItem {
  name: string;
  price: number;
  img: string;
}

function CardItem({ name, price, img }: ICardItem) {
  return (
    <div>
      <img src={img} alt="card-image" className="h-[218px] object-cover" />
      <div className="flex gap-1 mt-1 mb-2">
        {cardColors.map(({ id, color }) => (
          <ColorPalette key={id} id={id} color={color} />
        ))}
      </div>
      <p className="text-gray font-light text-base">{name}</p>
      <p className="text-base text-right font-semibold">¥ {price}</p>
    </div>
  );
}

export default CardItem;
