import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 530px;
  /* Tablet */
  @media screen and (min-width: 741px) and (max-width: 1120px) {
    height: 650px;
  }
`;

export const ImgWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;

  /* Mobile */
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

export const TitleWrapper = styled.section`
  position: absolute;
  top: 0.5rem;
  width: 100%;
  display: grid;
  justify-content: center;
`;

export const CardGridWrapper = styled.section`
  position: absolute;

  @media screen and (max-width: 1120px) {
    top: 3rem;
  }

  @media screen and (min-width: 1121px) {
    top: 6rem;
  }
`;
