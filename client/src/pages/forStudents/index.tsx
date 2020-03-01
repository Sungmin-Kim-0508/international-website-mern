import React, { useEffect } from "react";
import { loadPaginatedFile } from "./actionMethods";
import { useDispatch, useSelector } from "react-redux";
import ForStudentsTemplate from "./template";
import { RootState } from "rootReducer";

type ForStudentsPageProps = {
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsPage({
  onPageChange
}: ForStudentsPageProps): React.ReactElement {
  const TITLE = "For Students";
  const SUBTITLE =
    "Get web links to community resources that will be useful to STUDENT!";
  const DESC =
    "International Student Ministries offer you community resources when you come to London, ON and have also collected some web links to community resources that we hope will be useful to you as well.";

  const { forStudents } = useSelector((state: RootState) => state);
  console.log(forStudents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPaginatedFile());
  }, []);
  return (
    <ForStudentsTemplate
      TITLE={TITLE}
      SUBTITLE={SUBTITLE}
      DESC={DESC}
      onPageChange={onPageChange}
    />
  );
}

export default ForStudentsPage;
