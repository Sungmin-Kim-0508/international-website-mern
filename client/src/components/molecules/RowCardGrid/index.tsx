import React from "react";
import * as Sc from "./style";
import { RowDirectionCard } from "components";
import { NewsState, News } from "commons/__types__";
import uuid4 from "uuid4";

type RowCardGridProps = {
  cards: NewsState;
};

function RowCardGrid({ cards }: RowCardGridProps): React.ReactElement {
  const { docs } = cards.news;
  return (
    <Sc.Container>
      {docs.map((doc: News) => (
        <RowDirectionCard key={uuid4()} rowDirectionCard={doc} />
      ))}
    </Sc.Container>
  );
}

export default RowCardGrid;
