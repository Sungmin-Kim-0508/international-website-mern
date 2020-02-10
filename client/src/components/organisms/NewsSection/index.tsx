import React from "react";
import * as Sc from "./style";
import { Typography, Paragraph, RowCardGrid, Anchor } from "components";
import { NewsState } from "commons/__types__";
import { LATEST_NEWS, LATEST_NEWS_DESC } from "commons/string";

type NewsSectionProps = {
  cards: NewsState;
};

function NewsSection({ cards }: NewsSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TypographyWrapper>
        <Typography styleType="h1" color="primary" textAlign="center">
          <Anchor to="/news">{LATEST_NEWS}</Anchor>
        </Typography>
        <Paragraph color="gray">{LATEST_NEWS_DESC}</Paragraph>
      </Sc.TypographyWrapper>
      <Sc.CardsWrapper>
        <RowCardGrid cards={cards} />
      </Sc.CardsWrapper>
    </Sc.Container>
  );
}

export default NewsSection;
