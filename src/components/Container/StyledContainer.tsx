import styled from "styled-components";

const background = require("../../assets/background-login.svg");

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url("/images/background-login.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: content-box;
  background-position: top;
  background-color: #617ef2;
  position: relative;
`;
