import React from "react";

import FbIcon from "~/assets/fb-icon.png";
import IgIcon from "~/assets/ig-icon.png";
import HeaderLogo from "~/assets/header-logo-transparent.png";

import { navLinks } from "~/shared/constants";

interface IHeaderProps {
  onClickNavlinks: (data: string) => void;
}

function Header({ onClickNavlinks }: IHeaderProps) {
  return (
    <header className="py-10 flex container mx-auto">
      <nav className="flex justify-between items-center w-full">
        {/* LEFT LOGO */}
        <div className="cursor-pointer" onClick={() => onClickNavlinks("home")}>
          <img
            src={HeaderLogo}
            alt="logo"
            className="w-[238px] object-contain"
          />
        </div>

        {/* RIGHT LINKS */}
        <div className="flex items-center gap-16">
          {/* NAVLINKS */}
          <ul className="flex space-x-6 text-gray">
            {navLinks.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => onClickNavlinks(id)}
                className="cursor-pointer font-normal text-lg"
              >
                {label}
              </li>
            ))}
          </ul>

          {/* SOCIAL MEDIA LINKS */}
          <ul className="flex gap-4">
            <li>
              <img
                src={IgIcon}
                alt="instagram-icon"
                className="h-6 object-contain"
              />
            </li>
            <li>
              <img
                src={FbIcon}
                alt="facebook-icon"
                className="h-6 object-contain"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
