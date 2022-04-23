import React from "react";
import { StyledDivCreateAccount } from "./StyledDivCreateAccount";

type Props = {
  children: React.ReactNode;
};

const DivCreateAccount = (props: Props) => {
  return <StyledDivCreateAccount>{props.children}</StyledDivCreateAccount>;
};

export default DivCreateAccount;
