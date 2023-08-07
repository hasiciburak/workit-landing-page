import React from "react";
import founderImg from "../../../assets/images/image-founder.webp";
import { PrimaryButton } from "../../shared/Button";
const CallToAction = () => {
  return (
    <div className="mt-[6.875rem] mx-auto">
      <div className="w-[45.625rem] relative bg-primary p-16 flex flex-col gap-8 ml-[15rem]">
        <h3 className="heading-m text-white">Be first to test</h3>
        <p className="text-white">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I'll be in touch to schedule a
          call.
        </p>
        <PrimaryButton>Apply for access</PrimaryButton>
        <div className="absolute top-[-100px] left-[-387px] z-[-1]">
          <img
            src={founderImg}
            alt="Louis Graham - Founder of Workit"
            className="w-[29.813rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
