import styled from "styled-components";

type StyledImgLoadingProps = {
  readonly animation?: boolean;
};

export const StyledImgLoading = styled.img`
  position: absolute;
  transition-delay: 1s;
  transition-duration: 0.5s;
  transition-property: transform;
  transform: ${({ animation }: StyledImgLoadingProps) =>
    animation ? "scale(1)" : "scale(0)"};
  /* z-index: ${({ animation }: StyledImgLoadingProps) =>
    animation ? 1000 : -1}; */
  z-index: 100;
`;
