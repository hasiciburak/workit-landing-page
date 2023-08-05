import React from "react";
import { PrimaryButton, SecondaryButton } from "../../shared/Button";

const Header = () => {
  return (
    <div className="">
      <h1 className="heading-l">Header</h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        doloribus quod repudiandae veniam molestias quaerat vero vitae
        asperiores? Blanditiis doloremque asperiores eligendi ex voluptatem
        veniam consectetur nihil possimus nisi a.
      </p>
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton>Apply for access</SecondaryButton>
    </div>
  );
};

export default Header;
