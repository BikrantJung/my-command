import React from "react";
interface IconProps {
  children: React.ReactNode;
  className?: string;
}
const Icon = ({ children, className }: IconProps) => {
  return (
    <button
      className={`cursor-pointer rounded-full bg-slate-800 p-2 text-slate-200 hover:bg-slate-700/70 active:bg-slate-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Icon;
