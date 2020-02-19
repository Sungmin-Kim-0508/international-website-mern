import React from "react";
import * as Sc from "./style";
import { RowCardGrid, Typography, Paginator } from "components";
import { NewsState } from "commons/__types__";

type NewsListProps = {
  cards: NewsState;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function NewsList({ cards, onPageChange }: NewsListProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h2" textAlign="center">
          News List
        </Typography>
      </Sc.TitleWrapper>
      <Sc.CardsWrapper>
        <RowCardGrid cards={cards} />
      </Sc.CardsWrapper>
      <Sc.PaginatorWrapper>
        <Paginator cards={cards} onPageChange={onPageChange} />
      </Sc.PaginatorWrapper>
    </Sc.Container>
  );
}

export default NewsList;
