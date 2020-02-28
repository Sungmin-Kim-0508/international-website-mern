import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "news-list-container"
})`
  /* 
        padding is nested with molecules/RowCardGrid.
        So, the actual padding is 5rem. 
        (2rem from molecules/RowCardGrid and 3rem from organism/NewsPage_NewsList)
   */
  background-color: #eceeef;
  padding: 2rem 13rem;

  @media screen and (max-width: 1260px) {
    padding: 2rem 8rem;
  }
  @media screen and (max-width: 780px) {
    padding: 0.5rem;
  }
`;

export const TitleWrapper = styled.section`
  display: grid;
  justify-content: left;
  grid-template-columns: 1fr auto;
  margin-bottom: 2rem;
`;

export const CardsWrapper = styled.section``;

export const PaginatorWrapper = styled.section``;
