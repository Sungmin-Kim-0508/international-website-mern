import React from "react";
import * as Sc from "./style";
import { Table, FirstBlock, Button, Modal } from "components";
import { ForStudentsState } from "pages/forStudents/types";

type ForStudentsSectionProps = {
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
  forWhom?: ForStudentsState;
  openModal: () => void;
  closeModal: () => void;
  onDownloadFile: () => void;
  onSubmit: (e: React.FormEvent<HTMLElement>) => void;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function ForStudentsSection({
  TITLE,
  SUBTITLE,
  DESC,
  anchorRef,
  refsInModal,
  modalIsOpen,
  forWhom,
  openModal,
  closeModal,
  onDownloadFile,
  onSubmit,
  onPageChange
}: ForStudentsSectionProps) {
  return (
    <div>
      <FirstBlock TITLE={TITLE} SUBTITLE={SUBTITLE} DESC={DESC} />
      <div>Click the file name to download file or move to link</div>
      <Sc.TableWrapper>
        <Table
          forWhom={forWhom}
          anchorRef={anchorRef}
          onDownloadFile={onDownloadFile}
          onPageChange={onPageChange}
        />
      </Sc.TableWrapper>
      <Sc.ButtonWrapper>
        <Button theme="success" onClick={openModal}>
          Upload File
        </Button>
        <Button theme="danger">Remove File</Button>
      </Sc.ButtonWrapper>
      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        refsInModal={refsInModal}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default ForStudentsSection;
