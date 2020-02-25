import styled from "styled-components";

export const Container = styled.div``;

export const EditorWrapper = styled.section.attrs({
  className: "editor-wrapper"
})`
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.section.attrs({
  className: "button-wrapper"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;
