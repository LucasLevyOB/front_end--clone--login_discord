import React from "react";
import { StyledDivInputs } from "./StyledDivInputs";

type Props = {
  children: React.ReactNode;
};

const DivInputs = (props: Props) => {
  return <StyledDivInputs>{props.children}</StyledDivInputs>;
};

export default DivInputs;
