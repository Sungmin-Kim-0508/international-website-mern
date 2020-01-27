import styled from "styled-components";

const bgUrl = `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1.5fr;
  width: 100%;
  height: 530px;
  padding: 2rem 6rem;

  background-image: url(${bgUrl});
  background-position: center;
  background-size: cover;

  /* Tablet */
  @media screen and (max-width: 1120px) {
    height: 100%;
    padding: 1rem;
    row-gap: 1rem;
    grid-template-rows: unset;
  }

  /* Mobile */
  @media screen and (max-width: 740px) {
    background-image: none;
    padding: 3rem;
  }
`;

export const ImgWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.section`
  width: 100%;
  display: grid;
  justify-content: center;
`;

export const CardGridWrapper = styled.section``;
