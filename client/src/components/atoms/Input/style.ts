import styled from "styled-components";

type InputProps = {};

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  border: 2px solid #999999;
  :focus {
    border: 2px solid #dcd221;
  }
  &::placeholder {
    font-family: Georgia;
    font-style: normal;
    padding-left: 5px;
  }
`;
