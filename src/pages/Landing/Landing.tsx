import React, { useRef } from "react";

import useIsInViewport from "~/hooks/useIsInViewport";

import Header from "~/components/Header";

import { scrollOptions } from "~/shared/constants";

import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import Items from "./Items";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";

function Landing() {
  const bottomHeaderRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);

  const isBottomHeaderVisible = useIsInViewport({ ref: bottomHeaderRef });

  const getHeaderOpacity = () =>
    isBottomHeaderVisible ? "opacity-0" : "opacity-100";

  function onClickNavlinks(title: string) {
    switch (title) {
      case "home":
        homeRef.current?.scrollIntoView(scrollOptions);
        break;

      case "about":
        aboutRef.current?.scrollIntoView(scrollOptions);
        break;

      case "item":
        itemsRef.current?.scrollIntoView(scrollOptions);
        break;

      case "shop":
        shopRef.current?.scrollIntoView(scrollOptions);
        break;

      case "info":
        infoRef.current?.scrollIntoView(scrollOptions);
        break;

      case "press":
        pressRef.current?.scrollIntoView(scrollOptions);
        break;

      default:
        console.error("Invalid selelction");
        break;
    }
  }

  return (
    <div className="relative">
      {/* HEADER */}
      <div
        className={`sticky top-0 bg-white bg-opacity-70 z-50 transition-all duration-100 ease-out ${getHeaderOpacity()}`}
      >
        <Header onClickNavlinks={onClickNavlinks} />
      </div>

      {/* BANNER */}
      <section ref={homeRef}>
        <Banner />
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} className="py-44">
        <About />
      </section>

      {/* ITEMS */}
      <section ref={itemsRef} className="py-14">
        <Items />
      </section>

      {/* INFO */}
      <section ref={infoRef} className="py-14">
        <Info />
      </section>

      {/* CONTACT */}
      <section ref={shopRef} className="py-14">
        <Contact />
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-32">
        <FooterBanner />
      </section>

      {/* BOTTOM HEADER */}
      <div ref={bottomHeaderRef} className="px-56">
        <Header onClickNavlinks={onClickNavlinks} />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Landing;
