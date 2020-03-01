import React from "react";
import * as Sc from "./style";
import { Table, FirstBlock } from "components";

type ForStudentsSectionProps = {
  TITLE: string;
  SUBTITLE: string;
  DESC: string;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsSection({
  TITLE,
  SUBTITLE,
  DESC,
  onPageChange
}: ForStudentsSectionProps) {
  return (
    <div>
      <FirstBlock TITLE={TITLE} SUBTITLE={SUBTITLE} DESC={DESC} />
      <Sc.TableWrapper>
        <Table onPageChange={onPageChange} />
      </Sc.TableWrapper>
    </div>
  );
}

export default ForStudentsSection;
