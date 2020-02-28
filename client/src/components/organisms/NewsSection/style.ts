import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "home__news-section"
})`
  display: grid;
  padding: 3rem 10rem;
  @media screen and (max-width: 740px) {
    padding: 1rem;
  }
`;

export const TypographyWrapper = styled.section`
  display: grid;
  margin-bottom: 1rem;
`;

export const CardsWrapper = styled.section``;
