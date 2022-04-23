import React from "react";
import { StyledForm } from "./StyledForm";

type Props = {
  children: React.ReactNode;
};

const Form = (props: Props) => {
  return <StyledForm>{props.children}</StyledForm>;
};

export default Form;
