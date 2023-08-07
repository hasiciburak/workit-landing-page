import React from "react";
import darkLogo from "../../../assets/images/logo-dark.svg";
import fbLogo from "../../../assets/images/icon-facebook.svg";
import twLogo from "../../../assets/images/icon-twitter.svg";
import igLogo from "../../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="absloute bottom-0 text-center w-screen flex flex-col mx-auto mt-[8rem] p-[7rem]">
      <div className="logo-area text-center mx-auto">
        <img src={darkLogo} alt="" />
      </div>
      <div className="flex flex-row gap-3 mx-auto mt-2">
        <img src={fbLogo} alt="" className="cursor-pointer" />
        <img src={twLogo} alt="" className="cursor-pointer" />
        <img src={igLogo} alt="" className="cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
