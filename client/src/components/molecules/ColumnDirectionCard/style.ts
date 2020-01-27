import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 10rem auto;

  /* Mobile */
  @media screen and (max-width: 740px) {
    /* grid-template-columns: 7.5rem auto; */
    grid-auto-flow: row;
    grid-template-rows: 10rem auto;
    grid-template-columns: unset;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #ffffff;
`;

export const TypographyWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

export const DateWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  padding: 7px;
`;

export const ParagraphWrapper = styled.div`
  display: grid;
  justify-content: left;
`;

export const BtnWrapper = styled.div`
  display: grid;
  justify-content: center;
`;
