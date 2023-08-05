import React from "react";
import bgImg from "../../../assets/images/bgrectangle.png";
import leftItem from "../../../assets/images/bg-pattern-1.svg";
import rightItem from "../../../assets/images/bg-pattern-2.svg";
const HeroBackground = () => {
  return (
    <div className="absolute z-[-1] shrink-0 overflow-hidden">
      <img src={bgImg} className="max-h-[730px] w-screen" alt="" />
      <img
        src={leftItem}
        alt=""
        className="absolute z-0 top-[90px] left-[-130px]"
      />
      <img
        src={rightItem}
        alt=""
        className="absolute z-0 top-[314px] right-[-40px]"
      />
    </div>
  );
};

export default HeroBackground;
