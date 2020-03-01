import styled from "styled-components";

const bgImg = `${process.env.PUBLIC_URL}/img/miguel-henriques-E0bIdzi8zoQ-unsplash.jpg`;
export const Container = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;

  display: grid;
`;

export const TitleWrapper = styled.section``;
export const SubTitleWrapper = styled.section``;

export const DescriptionWrapper = styled.section``;
