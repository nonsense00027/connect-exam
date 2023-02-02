import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import CardImg from "~/assets/card.png";

import CustomButton from "~/components/CustomButton";
import CarouselBullets from "~/components/CarouselBullets";

import CardItem from "./components/CardItem";

function Items() {
  return (
    <div className="container mx-auto">
      <h2 className="section-title text-center mb-8">Items</h2>
      <div className="flex justify-center items-center gap-9">
        <ChevronLeftIcon className="h-24 text-gray opacity-40" />
        <CardItem name="ゆったりしたセーター" price={10000} img={CardImg} />
        <CardItem name="ゆったりしたセーター" price={10000} img={CardImg} />
        <CardItem name="ゆったりしたセーター" price={10000} img={CardImg} />
        <ChevronRightIcon className="h-24 text-gray opacity-40" />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <CarouselBullets />
        <CustomButton title="View more" />
      </div>
    </div>
  );
}

export default Items;
