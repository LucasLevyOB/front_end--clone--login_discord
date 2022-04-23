import React from "react";
import { StyledSpan } from "./StyledSpan";

type Props = {
  children: React.ReactNode;
};

const Span = (props: Props) => {
  return <StyledSpan>{props.children}</StyledSpan>;
};

export default Span;
