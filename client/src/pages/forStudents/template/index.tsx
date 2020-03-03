import React from "react";
import { ForStudentsSection } from "components";
import { ForStudentsState } from "../types";

type ForStudentsSectionTemplateProps = {
  TITLE: string;
  SUBTITLE: string;
  DESC: string;
  anchorRef: React.RefObject<HTMLAnchorElement>;
  refsInModal: {
    inputRef: React.RefObject<HTMLInputElement>;
    inputFileRef: React.RefObject<HTMLInputElement>;
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
  };
  modalIsOpen: boolean;
  forStudents: ForStudentsState;
  openModal: () => void;
  closeModal: () => void;
  onSubmit: (e: React.FormEvent<HTMLElement>) => void;
  onDownloadFile: () => void;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsTemplate({
  TITLE,
  SUBTITLE,
  DESC,
  anchorRef,
  refsInModal,
  modalIsOpen,
  forStudents,
  openModal,
  closeModal,
  onSubmit,
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
        refsInModal={refsInModal}
        forWhom={forStudents}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        onSubmit={onSubmit}
        onDownloadFile={onDownloadFile}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ForStudentsTemplate;
