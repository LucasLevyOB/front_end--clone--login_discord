import React from "react";
import { StyledContainer } from "./StyledContainer";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
