import React from "react";
import { PrimaryButton } from "../../shared/Button";
import phoneImg from "../../../assets/images/image-hero.webp";

const Hero = () => {
  return (
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
      <img
        src={phoneImg}
        alt=""
        className="h-[27.563rem] object-contain mt-[3.125rem]"
      />
    </div>
  );
};

export default Hero;
