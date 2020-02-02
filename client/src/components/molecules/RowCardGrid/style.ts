import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 1.5rem;

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    row-gap: 1.5rem;
  }
`;
