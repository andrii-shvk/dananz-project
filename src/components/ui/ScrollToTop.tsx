"use client";

import { useEffect, useState } from "react";
import BackToTop from "../shared/icons/BackToTop";
import clsx from "clsx";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollY: number = window.scrollY;
      scrollY > 350 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={clsx("scrollToTop", {
        "bottom-[50px]": active,
        "-bottom-[50px]": !active,
      })}
      onClick={scrollToTop}
    >
      <BackToTop />
    </button>
  );
};

export default ScrollToTop;
