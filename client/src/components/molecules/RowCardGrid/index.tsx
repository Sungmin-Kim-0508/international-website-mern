import React from "react";
import * as Sc from "./style";
import { RowDirectionCard } from "components";
import { rowDirectionCard } from "commons/__types__";

type RowCardGridProps = {
  cards: rowDirectionCard[];
};

function RowCardGrid({ cards }: RowCardGridProps): React.ReactElement {
  return (
    <Sc.Container>
      {cards.map(card => (
        <RowDirectionCard rowDirectionCard={card} />
      ))}
    </Sc.Container>
  );
}

export default RowCardGrid;
