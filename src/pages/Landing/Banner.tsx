import React from "react";

import Banner1 from "~/assets/banner-1.png";
import Banner2 from "~/assets/banner-2.png";
import Banner3 from "~/assets/banner-3.png";
import BannerLogo from "~/assets/banner-logo.png";

function Banner() {
  return (
    <main className="pt-10">
      <div className="container mx-auto grid grid-cols-3 gap-8 px-10 h-screen overflow-hidden">
        <div>
          <img
            src={Banner1}
            alt="banner-image-1"
            className="h-full object-cover mt-10"
          />
        </div>
        <div className="flex flex-col items-center gap-10">
          <img
            src={BannerLogo}
            alt="banner-logo"
            className="object-contain h-20"
          />
          <img
            src={Banner2}
            alt="banner-image-2"
            className="h-full object-cover"
          />
        </div>
        <div>
          <img
            src={Banner3}
            alt="banner-image-3"
            className="h-full object-cover mt-10"
          />
        </div>
      </div>
      <div className="bg-orange w-full py-2">
        <p className="text-center text-white text-sm font-light">
          新規登録で１０％オフキャンペーン実施中！
        </p>
      </div>
    </main>
  );
}

export default Banner;
