import React from "react";
import { StyledInputWrapper } from "./StyledInputWrapper";

type Props = {
  children: React.ReactNode;
};

const InputWrapper = (props: Props) => {
  return <StyledInputWrapper>{props.children}</StyledInputWrapper>;
};

export default InputWrapper;
