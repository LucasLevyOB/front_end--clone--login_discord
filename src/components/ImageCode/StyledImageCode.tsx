import styled from "styled-components";

export const StyledImageCode = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  > img {
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 50px;
  }
`;
