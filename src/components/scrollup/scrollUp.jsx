import React,{ useEffect } from "react";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollUp = document.querySelector(".scrollup");
          if (window.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
          } else {
            scrollUp.classList.remove("show-scroll");
          }
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp
