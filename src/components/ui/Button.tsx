import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { buttonStyles } from "../../styles/buttonStyles";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;
interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}
const Button = ({
  position,
  intent,
  width,
  children,
  onClick,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ intent, position, width })}
      {...rest}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
