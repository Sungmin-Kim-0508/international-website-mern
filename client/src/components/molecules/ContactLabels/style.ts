import styled from "styled-components";

export const Row = styled.section`
  display: grid;
  grid-auto-flow: row;
  background-color: #f5f5f4;
  margin-left: 4rem;
  padding-left: 4rem;
  padding-top: 1rem;
  border-radius: 5px;

  @media screen and (max-width: 740px) {
    margin-left: 0;
    padding-left: 0;
  }
`;
