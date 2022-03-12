import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import "./ScrollToTop.css";

import { ClassNames } from "../../utils";
import React from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
  <div className="fixed bottom-2 right-2">
             <button type ='button' onClick={ScrollToTop} className={ClassNames(isVisible ? 'opacity-100' : 'opacity-0', 'shadow-sm text-#1f2235 bg-#ff5823 transition-opacity hover:bg-#1f2235 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#1f2235' )}> <BiArrowFromBottom className="h-3 w-3" aria-hidden='true' /></button>
         </div>
         )
};
