import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.7fr 1.3fr;

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    grid-template-rows: 0.6fr 1.4fr;
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.section`
  height: 33.5rem;

  @media screen and (max-width: 740px) {
    height: 20rem;
  }
`;

export const LabelsWrapper = styled.section``;
