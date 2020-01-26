import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  row-gap: 2rem;
  padding: 4rem 2rem;

  @media screen and (max-width: 740px) {
    padding: 2rem;
  }
`;
