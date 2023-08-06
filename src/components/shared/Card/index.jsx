import React from "react";

/** Card component can use for features
 *  @constructor: className, children, headerNumber, title
 */
const Card = ({ className, children, headerNumber, title }) => {
  return (
    <div className={`${className} text-center`}>
      <div className="rounded-full border-2 border-tertiary p-4 flex w-[3.5rem] h-[3.5rem] justify-center items-center mx-auto">
        <h2 className="text-primary text-2xl">{headerNumber}</h2>
      </div>
      <h3 className="text-[2rem] mt-[3.5rem]">{title}</h3>
      <p className="mt-[1.75rem]">{children}</p>
    </div>
  );
};

export default Card;
