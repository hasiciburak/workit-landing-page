import React from "react";
import bgImg from "../../../assets/images/bgrectangle.png";
const HeroBackground = () => {
  return (
    <div className="absolute z-[-1]  shrink-0 overflow-hidden">
      <img src={bgImg} className="max-h-[730px] w-screen" alt="" />
    </div>
  );
};

export default HeroBackground;
