import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;
`;
