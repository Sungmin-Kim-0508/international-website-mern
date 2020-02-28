import styled from "styled-components";

export const Container = styled.section.attrs({
  className: "news-detail-template-container"
})`
  margin: 2rem 5rem;

  @media screen and (max-width: 1280px) {
    margin: 3rem 4rem;
  }
  @media screen and (max-width: 780px) {
    margin: 1rem;
  }
`;

export const NewsDetailWrapper = styled.div`
  margin-bottom: 1rem;
  border: 3px solid #d1d5da;
  border-radius: 5px;
  padding: 2rem 5rem;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;
