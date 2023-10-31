import React, { useState } from "react";
import {AiOutlineArrowUp} from "react-icons/ai";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <AiOutlineArrowUp />
    </div>
  );
}

export default ScrollToTop;
