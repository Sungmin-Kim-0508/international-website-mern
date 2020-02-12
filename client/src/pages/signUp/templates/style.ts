import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 20rem;

  display: grid;
  row-gap: 1.5rem;

  @media screen and (max-width: 1120px) {
    padding: 5rem 10rem;
  }
  @media screen and (max-width: 720px) {
    padding: 5rem 1rem;
  }
`;

export const LabelWrapper = styled.section``;

export const InputsWrapper = styled.section``;

export const ButtonWrapper = styled.section`
  display: grid;
  row-gap: 1rem;
`;
