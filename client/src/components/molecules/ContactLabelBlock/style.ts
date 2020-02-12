import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
  width: 100%;
  grid-template-rows: repeat(3, 6rem);
`;
