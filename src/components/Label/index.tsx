import React from "react";
import { StyledLabel } from "./StyledLabel";

type Props = {
  children: React.ReactNode;
  htmlFor?: string;
};

const Label = ({ children, htmlFor }: Props) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
