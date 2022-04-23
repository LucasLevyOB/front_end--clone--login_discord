import styled from "styled-components";

export const StyledDivQRCode = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 715px) {
    display: none;
  }
`;
