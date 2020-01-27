import styled from "styled-components";

const bgImg = `${process.env.PUBLIC_URL}/img/neonbrand-XEsx2NVpqWY-unsplash.jpg`;

export const Container = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;

  display: grid;
  padding: 3rem;

  @media screen and (max-width: 1120px) {
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 740px) {
    row-gap: 3rem;
  }
`;

export const TitleWrapper = styled.section`
  display: grid;
`;

export const ContentWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  column-gap: 7rem;

  @media screen and (max-width: 1120px) {
    column-gap: 3rem;
  }

  @media screen and (max-width: 740px) {
    grid-auto-flow: row;
    row-gap: 2rem;
  }
`;

export const BoxWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
`;
