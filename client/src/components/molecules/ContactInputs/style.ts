import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 1rem;
  background-color: #f5f5f4;
  padding: 3rem;
  border-radius: 5px;
  @media screen and (max-width: 740px) {
    padding: 0;
  }
`;

export const ButtonWrapper = styled.section`
  display: grid;
  justify-content: center;
  /* width: 3rem; */
`;
