import styled from "styled-components";

const bgUrl = `${process.env.PUBLIC_URL}/img/annie-spratt-UitqRQD4Z7g-unsplash.jpg`;
const mobileBgUrl = `${process.env.PUBLIC_URL}/img/chirag-saini-30zA3LsA9ZE-unsplash.jpg`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 0.5fr 1.5fr;

  background-image: url(${bgUrl});
  background-position: center;
  background-size: cover;
  opacity: 0.9;

  padding: 3rem 6rem;
  height: 530px;

  /* Tablet */
  @media screen and (max-width: 1120px) {
    padding: 2rem 4rem;
  }

  /* Mobile */
  @media screen and (max-width: 740px) {
    grid-template-rows: 7rem auto;

    background-image: url(${mobileBgUrl});
    background-size: cover;
    height: 100%;
    padding: 1.6rem;
  }
`;

export const TitleWrapper = styled.section`
  display: grid;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ProgramGridWrapper = styled.section``;
