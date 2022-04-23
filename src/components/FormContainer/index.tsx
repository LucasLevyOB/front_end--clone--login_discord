import React from "react";
import { StyledFormContainer } from "./StyledFormContainer";

type Props = {
  children: React.ReactNode;
  animation?: boolean;
};

const FormContainer = ({ children, animation = false, ...rest }: Props) => {
  return (
    <StyledFormContainer animation={animation} {...rest}>
      {children}
    </StyledFormContainer>
  );
};

export default FormContainer;
