import React from "react";
import { PrimaryButton } from "../../shared/Button";
import HeroBackground from "../../shared/HeroBackground";

const Hero = () => {
  return (
    <>
      <HeroBackground />
      <div className="mt-[3.438rem] flex flex-col">
        <h1
          className="heading-l text-center text-inherit"
          style={{ color: "white" }}
        >
          Data <span className="border-b-[3px] border-secondary">tailored</span>
          &nbsp;to
          <br />
          your needs
        </h1>
        <div className="mx-auto mt-[2.313rem]">
          <PrimaryButton className="w-auto">Learn more</PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
