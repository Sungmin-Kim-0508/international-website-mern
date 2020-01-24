import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 33.5rem;
`;

export const ImgWrapper = styled.section`
  height: 100%;
`;

export const TypographyWrapper = styled.section`
  position: absolute;
  top: 6rem;
  display: grid;
  width: 100%;
  justify-content: center;
  justify-items: center;

  /* Mobile */
  @media screen and (max-width: 740px) {
    top: 7rem;
  }
`;

export const ParagraphWrapper = styled.section`
  position: absolute;
  display: grid;
  justify-content: center;
  top: 16rem;
  padding: 0 20rem;

  /* Mobile */
  @media screen and (max-width: 740px) {
    top: 17rem;
    padding: 0 1rem;
  }

  @media screen and (min-width: 741px) and (max-width: 1120px) {
    padding: 0 7rem;
  }
`;
