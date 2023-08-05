import React from "react";
import logoLight from "../../../assets/images/logo-light.svg";
import { SecondaryButton } from "../../shared/Button";
const Navbar = () => {
  return (
    <nav
      className={`lg:px-[10.334rem] lg:pt-[3.611rem] w-screen md:px-[2.438rem] md:pt-[2rem] px-4 pt-8`}
    >
      <ul className="  flex flex-row justify-between">
        <li className="">
          <img src={logoLight} alt="Workit navbar lgoo" />
        </li>
        <li className="ml-auto">
          <SecondaryButton>Apply for access</SecondaryButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
