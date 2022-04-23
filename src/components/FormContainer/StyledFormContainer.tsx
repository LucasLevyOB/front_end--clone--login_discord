import styled from "styled-components";

import { animationDivForm } from "./animationDivForm";
import { animationDivForm653px } from "./animationDivForm653px";
import { animationDivForm915px } from "./animationDivForm915px";

type StyledFormContainerProps = {
  readonly animation?: boolean;
};

export const StyledFormContainer = styled.div`
  /* display: none; */
  position: absolute;
  z-index: 10;
  width: 100%;
  height: auto;
  max-width: 784px;
  background-color: var(--primary);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  @media (max-width: 715px) {
    max-width: 480px;
  }
  margin-top: ${({ animation }: StyledFormContainerProps) =>
    animation ? "225%" : 0};
  animation: ${({ animation }: StyledFormContainerProps) =>
      animation ? animationDivForm : ""}
    1.1s linear 1;
  @media (max-height: 915px) {
    margin-top: ${({ animation }: StyledFormContainerProps) =>
      animation ? "350%" : 0};
    animation: ${({ animation }: StyledFormContainerProps) =>
        animation ? animationDivForm915px : ""}
      1.1s linear 1;
  }
  @media (max-height: 653px) {
    margin-top: ${({ animation }: StyledFormContainerProps) =>
      animation ? "450%" : 0};
    animation: ${({ animation }: StyledFormContainerProps) =>
        animation ? animationDivForm653px : ""}
      1.1s linear 1;
  }
`;
