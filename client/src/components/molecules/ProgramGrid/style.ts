import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;

  /* Tablet */
  @media screen and (max-width: 1120px) {
  }
  /* Mobile  */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    column-gap: unset;
    grid-template-columns: unset;
    row-gap: 1rem;
  }
`;
