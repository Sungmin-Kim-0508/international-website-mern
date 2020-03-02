import React from "react";
import { ForStudentsSection } from "components";
import { ForStudentsState } from "../types";

type ForStudentsSectionTemplateProps = {
  TITLE: string;
  SUBTITLE: string;
  DESC: string;
  anchorRef: React.RefObject<HTMLAnchorElement>;
  forStudents: ForStudentsState;
  onDownloadFile: () => void;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsTemplate({
  TITLE,
  SUBTITLE,
  DESC,
  anchorRef,
  forStudents,
  onDownloadFile,
  onPageChange
}: ForStudentsSectionTemplateProps): React.ReactElement {
  return (
    <div>
      <ForStudentsSection
        TITLE={TITLE}
        SUBTITLE={SUBTITLE}
        DESC={DESC}
        anchorRef={anchorRef}
        forWhom={forStudents}
        onDownloadFile={onDownloadFile}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ForStudentsTemplate;
