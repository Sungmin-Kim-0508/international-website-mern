import styled from "styled-components";

const bgImg = `${process.env.PUBLIC_URL}/img/papaioannou-kostas-tysecUm5HJA-unsplash.jpg`;
export const Container = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  height: 33.5rem;
`;

export const ContentWrapper = styled.section`
  display: grid;
  align-content: center;
  row-gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.section`
  height: 100%;
`;

export const TypographyWrapper = styled.section`
  display: grid;
  width: 100%;
  justify-content: center;
  justify-items: center;
`;

export const ParagraphWrapper = styled.section`
  display: grid;
  justify-content: center;
  padding: 0 20rem;

  /* Tablet */
  @media screen and (max-width: 1120px) {
    padding: 0 7rem;
  }

  /* Mobile */
  @media screen and (max-width: 740px) {
    padding: 0 1rem;
  }
`;
