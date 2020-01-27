import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 3.75rem;

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    row-gap: 1rem;
  }

  /* Tablet */
  @media screen and (min-width: 741px) and (max-width: 1120px) {
    grid-auto-flow: row;
    row-gap: 0.5rem;
    padding: 1.5rem;
  }
`;
