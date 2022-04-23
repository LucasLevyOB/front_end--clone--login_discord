import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  color: var(--text-normal);
  border-radius: 3px;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  :hover {
    border-color: rgba(0, 0, 0, 0.7);
  }
  :focus {
    border-color: #7289da;
  }
`;
