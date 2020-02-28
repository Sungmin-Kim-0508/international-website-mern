import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  /* grid-auto-flow: column; */
  /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
  column-gap: 1.5rem;
  font-family: Georgia;
  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    grid-template-columns: none;
    row-gap: 1.5rem;
    padding: 1rem;
  }
`;
