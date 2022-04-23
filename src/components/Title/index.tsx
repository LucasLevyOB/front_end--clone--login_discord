import React from "react";
import { StyledTitle } from "./StyledTitle";

type Props = {
  children: React.ReactNode;
};

const Title = (props: Props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
