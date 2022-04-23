import React from "react";
import { StyledDivQRCode } from "./StyledDivQRCode";

type Props = {
  children: React.ReactNode;
};

const DivQRCode = (props: Props) => {
  return <StyledDivQRCode>{props.children}</StyledDivQRCode>;
};

export default DivQRCode;
