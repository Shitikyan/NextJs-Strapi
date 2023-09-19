'use client';
import React, { useEffect, useState } from "react";

function Scroll() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <button className="fixed cursor-pointer 
          flex right-5 bottom-5 bg-black text-white w-12 h-12 justify-center items-center rounded-md max-[768px]:w-10 max-[768px]:h-10 max-[768px]:right-7 max-[768px]:bottom-7" onClick={goToTop}>
          &#8743;
        </button>
      )}
    </>
  );
}
export default Scroll;