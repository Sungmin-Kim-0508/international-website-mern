import styled from "styled-components";

export const Container = styled.section.attrs({
  className: "news-create-template-container"
})`
  padding: 3rem 13rem;

  @media screen and (max-width: 1280px) {
    padding: 3rem 8rem;
  }

  @media screen and (max-width: 780px) {
    padding: 3rem 1rem;
  }
`;
