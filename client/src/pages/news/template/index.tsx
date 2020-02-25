import React from "react";
import { NewsList } from "components";
import { NewsState } from "commons/__types__";

type NewsTemplateProps = {
  cards: NewsState;
  onPageChange: (selectedItem: { selected: number }) => void;
  onMoveCreateNews: () => void;
};

export default function NewsTemplate({
  cards,
  onPageChange,
  onMoveCreateNews
}: NewsTemplateProps): React.ReactElement {
  return (
    <NewsList
      cards={cards}
      onPageChange={onPageChange}
      onMoveCreateNews={onMoveCreateNews}
    />
  );
}
