import styled from "styled-components";

import { animationDivForm } from "../animationDivForm";

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
`;
