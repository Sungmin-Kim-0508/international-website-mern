import React from "react";
import HomeTemplates from "./templates";
import {
  notes,
  stuInfos,
  voluInfos,
  cards,
  labels
} from "commons/__mock_json__";

type HomePageProps = {};

function HomePage({}: HomePageProps): React.ReactElement {
  return (
    <>
      <HomeTemplates
        notes={notes}
        stuInfos={stuInfos}
        voluInfos={voluInfos}
        cards={cards}
        labels={labels}
      />
    </>
  );
}

export default HomePage;
