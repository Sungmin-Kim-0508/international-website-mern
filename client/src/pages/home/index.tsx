import React, { useEffect } from "react";
import HomeTemplates from "./templates";
import { notes, stuInfos, voluInfos, labels } from "commons/__mock_json__";
import { loadPaginatedNews } from "./actionMethods";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../rootReducer";

type HomePageProps = {};

function HomePage({}: HomePageProps): React.ReactElement {
  const { home } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPaginatedNews());
  }, []);

  return (
    <>
      <HomeTemplates
        notes={notes}
        stuInfos={stuInfos}
        voluInfos={voluInfos}
        cards={home.news}
        programLabels={labels}
      />
    </>
  );
}

export default HomePage;
