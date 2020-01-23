import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  border: 2px solid #999999;
  :focus {
    border: 2px solid #dcd221;
  }

  &::placeholder {
    font-family: Georgia;
    font-style: normal;
  }
`;
