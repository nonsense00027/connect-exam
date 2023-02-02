import React from "react";
import ArrowButton from "~/assets/circle-arrow.png";

interface IInfoItemProps {
  title: string;
  date: string;
}

function InfoItem({ title, date }: IInfoItemProps) {
  return (
    <div className="border-b py-4 flex items-center justify-between mb-10">
      <div>
        <h4 className="text-lg text-gray font-light mb-4">{title}</h4>
        <p className="text-xs text-gray font-light">{date}</p>
      </div>
      <div className="cursor-pointer">
        <img src={ArrowButton} alt="arrow-button-icon" className="h-10" />
      </div>
    </div>
  );
}

export default InfoItem;
