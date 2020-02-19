import React from "react";
import { NewsList } from "components";
import { NewsState } from "commons/__types__";

type NewsTemplateProps = {
  cards: NewsState;
  onPageChange: (selectedItem: { selected: number }) => void;
};

export default function NewsTemplate({
  cards,
  onPageChange
}: NewsTemplateProps): React.ReactElement {
  return (
    <div>
      <NewsList cards={cards} onPageChange={onPageChange} />
    </div>
  );
}
