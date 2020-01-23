import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 2rem;
`;

export const LabelWrapper = styled.section`
  display: grid;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5rem;

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;
