import React from "react";
import * as Sc from "./style";
import { Table, FirstBlock, Button, Paginator } from "components";
import { ForStudentsState } from "pages/forStudents/types";

type ForStudentsSectionProps = {
  TITLE: string;
  SUBTITLE: string;
  DESC: string;
  anchorRef: React.RefObject<HTMLAnchorElement>;
  forWhom?: ForStudentsState;
  onDownloadFile: () => void;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsSection({
  TITLE,
  SUBTITLE,
  DESC,
  anchorRef,
  forWhom,
  onDownloadFile,
  onPageChange
}: ForStudentsSectionProps) {
  return (
    <div>
      <div>Click the file name to download file or move to link</div>
      <FirstBlock TITLE={TITLE} SUBTITLE={SUBTITLE} DESC={DESC} />
      <Sc.TableWrapper>
        <Table
          forWhom={forWhom}
          anchorRef={anchorRef}
          onDownloadFile={onDownloadFile}
          onPageChange={onPageChange}
        />
      </Sc.TableWrapper>

      <Sc.ButtonWrapper>
        <Button theme="success">Upload File</Button>
        <Button theme="danger">Remove File</Button>
      </Sc.ButtonWrapper>
    </div>
  );
}

export default ForStudentsSection;
