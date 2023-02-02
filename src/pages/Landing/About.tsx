import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import AboutImg from "~/assets/about.png";

function About() {
  return (
    <div className="container mx-auto flex px-40 gap-14 items-center">
      <img src={AboutImg} alt="about-image" className="w-96 object-contain" />
      <div>
        <h2 className="section-title text-center mb-8">About</h2>
        <p className="text-base text-gray font-light">
          着るだけで心が満たされていくそんなセーターを作るために
          セーターだけを販売するOnly Sweaterを立ち上げました。
          <br />
          <br />
          冬の季節にしか着ないセーターだけれど、
          少しこだわるだけで今年の冬を特別なものにしてもらえるように
          細部までこだわって作りました。
          <br />
          <br />
          あなたの冬が特別なものになりますように...
        </p>
        <button className="group mt-4 py-2 flex items-center gap-2 border-b border-transparent hover:border-black transition-all duration-100 ease-out">
          View more
          <ArrowLongRightIcon className="font-extralight w-4 opacity-0 group-hover:opacity-100 transition-all duration-100 ease-out" />
        </button>
      </div>
    </div>
  );
}

export default About;
