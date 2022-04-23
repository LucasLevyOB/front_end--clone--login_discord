import React from "react";

import { StyledImageCode } from "./StyledImageCode";

type Props = {
  children: React.ReactNode;
};

const ImageCode = (props: Props) => {
  return <StyledImageCode>{props.children}</StyledImageCode>;
};

export default ImageCode;
