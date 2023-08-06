import React from "react";
import Card from "../../shared/Card";
import featuresBg from "../../../assets/images/features-background.png";
import phoneImg from "../../../assets/images/image-hero.webp";

const Features = () => {
  return (
    <div className="relative mt-[30px]">
      <img
        src={phoneImg}
        alt=""
        className="h-[27.563rem] object-contain mx-auto "
      />
      <img
        src={featuresBg}
        alt=""
        className="absolute top-0 z-[-2] max-h-[960px] w-screen mt-[-50px]"
      />
      <div className="flex px-[10.5rem] gap-2 w-screen">
        <Card headerNumber="1" title="Actionable insights" className="w-1/3">
          Optimize your products, improve customer satisfaction and stay ahead
          of the competition with our product data analytics.
        </Card>
        <Card headerNumber="2" title="Data-driven decisions" className="w-1/3">
          Make data-driven decisions with our product data analytics. Our
          AI-generated reports help you unlock insights hidden in your product
          data.
        </Card>
        <Card headerNumber="3" title="Always affordable" className="w-1/3">
          Always affordable pricing that scales with your business. Get
          top-quality product data analytics services without hidden costs or
          unexpected fees.
        </Card>
      </div>
    </div>
  );
};

export default Features;
