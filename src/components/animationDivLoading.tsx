import { keyframes } from "styled-components";

export const animationDivLoading = keyframes`
  0% {transform: translate(-50%, 10%)}
  20% {transform: translate(-50%, 15%)}
  40% {transform: translate(-50%, %)}
  60% {transform: translate(-50%, -50%)}
  70% {transform: translate(-50%, -50%)}
  80% {transform: translate(-50%, -50%)}
  90% {
    transform: translate(-50%, -50%);
  }
  95% {
    transform: translate(-50%, -40%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;
