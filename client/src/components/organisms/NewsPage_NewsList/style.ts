import styled from "styled-components";

export const Container = styled.div`
  /* 
        padding is nested with molecules/RowCardGrid.
        So, the actual padding is 5rem. 
        (2rem from molecules/RowCardGrid and 3rem from organism/NewsPage_NewsList)
   */
  padding: 3rem;
`;

export const TitleWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const CardsWrapper = styled.section``;

export const PaginatorWrapper = styled.section``;
