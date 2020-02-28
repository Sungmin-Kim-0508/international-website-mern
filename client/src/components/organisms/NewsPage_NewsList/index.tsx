import React from "react";
import * as Sc from "./style";
import { RowCardGrid, Typography, Paginator, Button } from "components";
import { NewsState } from "commons/__types__";

type NewsListProps = {
  cards: NewsState;
  onPageChange: (selectedItem: { selected: number }) => void;
  onMoveCreateNews: () => void;
};

function NewsList({
  cards,
  onPageChange,
  onMoveCreateNews
}: NewsListProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h1" textAlign="center">
          News List
        </Typography>
        <Button theme="gray" onClick={onMoveCreateNews}>
          Create News
        </Button>
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
