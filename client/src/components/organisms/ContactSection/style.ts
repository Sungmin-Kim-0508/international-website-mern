import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.section`
  @media screen and (max-width: 740px) {
    display: none;
  }
`;
