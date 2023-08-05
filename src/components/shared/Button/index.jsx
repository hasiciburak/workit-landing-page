import React from "react";

export const PrimaryButton = ({ children, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-primary text-[1.125rem] px-[1.563rem] py-[0.906rem] ${className} border-2 border-[transparent] hover:border-2 hover:border-secondary hover:text-secondary hover:bg-[transparent] min-w-[140px] transition-all`}
      style={style}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      className={`text-ghostwhite border-b-[0.188rem] border-b-secondary transition-all hover:text-secondary ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};
