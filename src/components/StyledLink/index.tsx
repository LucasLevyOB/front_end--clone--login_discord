import React from "react";
import { StyledLink } from "./StyledLink";

type Props = {
  children: React.ReactNode;
};

const Link = (props: Props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default Link;
