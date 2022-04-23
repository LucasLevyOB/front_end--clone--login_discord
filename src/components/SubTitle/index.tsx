import React from "react";
import { StyledSubTitle } from "./StyledSubTitle";

type Props = {
  children: React.ReactNode;
};

const SubTitle = (props: Props) => {
  return <StyledSubTitle>{props.children}</StyledSubTitle>;
};

export default SubTitle;
