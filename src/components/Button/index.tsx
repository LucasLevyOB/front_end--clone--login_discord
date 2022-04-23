import React from "react";
import { StyledButton } from "./StyledButton";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({ children, type = "button", onClick }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
