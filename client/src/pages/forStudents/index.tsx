import React, { useEffect, useRef } from "react";
import ForStudentsTemplate from "./template";
import studentApi from "commons/apis/StudentApi";
import { loadPaginatedFile } from "./actionMethods";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";

function ForStudentsPage(): React.ReactElement {
  const TITLE = "For Students";
  const SUBTITLE =
    "Get web links to community resources that will be useful to STUDENT!";
  const DESC =
    "International Student Ministries offer you community resources when you come to London, ON and have also collected some web links to community resources that we hope will be useful to you as well.";

  const { forStudents } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const numFileBlock = 6;
  useEffect(() => {
    dispatch(loadPaginatedFile(1, numFileBlock));
  }, [dispatch]);

  const onPageChange = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    dispatch(loadPaginatedFile(page, numFileBlock));
  };

  const anchorRef = useRef<HTMLAnchorElement>(null);
  const onDownloadFile = () => {
    const id = anchorRef.current?.id;
    studentApi.downloadFile(id);
  };

  return (
    <ForStudentsTemplate
      TITLE={TITLE}
      SUBTITLE={SUBTITLE}
      DESC={DESC}
      anchorRef={anchorRef}
      forStudents={forStudents}
      onDownloadFile={onDownloadFile}
      onPageChange={onPageChange}
    />
  );
}

export default ForStudentsPage;
