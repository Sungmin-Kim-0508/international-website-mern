import React from "react";
import ReactModal from "react-modal";
import { Typography, Button, Input, TextArea } from "components";

type ModalProps = {
  isOpen: boolean;
  refsInModal: {
    inputRef: React.RefObject<HTMLInputElement>;
    inputFileRef: React.RefObject<HTMLInputElement>;
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
  };
  closeModal: () => void;
  onSubmit?: (e: React.FormEvent<HTMLElement>) => void;
};
const SIZE = "500px";
const customStyles = {
  content: {
    // padding: "3rem",

    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: SIZE,
    height: SIZE
  }
};

ReactModal.setAppElement(document.getElementById("root") as HTMLElement);

function Modal({ isOpen, refsInModal, closeModal, onSubmit }: ModalProps) {
  const { inputRef, inputFileRef, textAreaRef } = refsInModal;
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <form onSubmit={onSubmit}>
        <Typography styleType="h1">Upload File</Typography>
        <Input
          placeholder="Enter File Name"
          required={true}
          inputRef={inputRef}
        />
        <TextArea
          placeholder="Enter Description"
          required={true}
          textAreaRef={textAreaRef}
        />
        <Button theme="gray" onClick={closeModal}>
          Cancel
        </Button>
        <Button theme="success" type="submit">
          Upload
        </Button>
        <input
          type="file"
          required
          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
          text/plain, application/pdf"
          ref={inputFileRef}
        />
      </form>
    </ReactModal>
  );
}

export default Modal;
