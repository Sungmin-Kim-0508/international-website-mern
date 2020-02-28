import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
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
  border-radius: 5px;
  padding: 2rem;
  column-gap: 1rem;

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;
