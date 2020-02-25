import styled from "styled-components";

export const Container = styled.div`
  font-family: Georgia;
  border: 3px solid #d1d5da;
  border-radius: 5px;
  height: 80vh;
  padding: 2rem 5rem;

  @media screen and (max-width: 1280px) {
    height: 40vh;
    padding: 2rem;
  }
  @media screen and (max-width: 780px) {
    height: 70vh;
    padding: 1rem;
  }
`;
