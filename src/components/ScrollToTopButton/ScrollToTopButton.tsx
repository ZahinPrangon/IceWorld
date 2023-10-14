/* eslint-disable react/button-has-type */

"use client";

import "./ScrollToTopButton.css"; // Import your CSS file for styling

import React, { useEffect, useState } from "react";

type ScrollToTopButtonProps = {
  buyNowButtonRef: any;
};
function ScrollToTopButton({ buyNowButtonRef }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToBuyNow = () => {
    if (buyNowButtonRef.current) {
      buyNowButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // // Scroll to top when the button is clicked
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 350,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={() => scrollToBuyNow()}
      title="Go to top"
      // variant="unstyled"
    >
      GET NOW
    </button>
  );
}

export default ScrollToTopButton;
