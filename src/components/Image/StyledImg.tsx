import styled from "styled-components";

type StyledImgProps = {
  readonly animation?: boolean;
};

export const StyledImg = styled.img`
  width: 100%;
  max-width: 130px;
  height: auto;
  position: absolute;
  top: 24px;
  left: 24px;
  @media (max-width: 715px) {
    top: 24px;
    left: calc(50% - 65px);
  }
`;
