import React from "react";
import { ForStudentsSection } from "components";

type ForStudentsSectionTemplateProps = {
  TITLE: string;
  SUBTITLE: string;
  DESC: string;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsTemplate({
  TITLE,
  SUBTITLE,
  DESC,
  onPageChange
}: ForStudentsSectionTemplateProps): React.ReactElement {
  return (
    <div>
      <ForStudentsSection
        TITLE={TITLE}
        SUBTITLE={SUBTITLE}
        DESC={DESC}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ForStudentsTemplate;
