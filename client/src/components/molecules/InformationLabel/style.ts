import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;

  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
  }
`;
