import React from "react";

import FooterBannerImg from "~/assets/footer-banner.png";
import BannerLogo from "~/assets/banner-logo-transparent.png";

function FooterBanner() {
  return (
    <div className="w-screen h-[361px] relative">
      <img
        src={FooterBannerImg}
        alt="footer-banner-image"
        className="object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-50">
        <img
          src={BannerLogo}
          alt="banner-logo"
          className="h-20 object-contain"
        />
      </div>
    </div>
  );
}

export default FooterBanner;
