import React, { useState, useEffect, useRef } from "react";
import ForStudentsTemplate from "./template";
import studentApi from "commons/apis/StudentApi";
import { loadPaginatedFile, uploadStudentFile } from "./actionMethods";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";

function ForStudentsPage(): React.ReactElement {
  const TITLE = "For Students";
  const SUBTITLE =
    "Get web links to community resources that will be useful to STUDENT!";
  const DESC =
    "International Student Ministries offer you community resources when you come to London, ON and have also collected some web links to community resources that we hope will be useful to you as well.";

  const { forStudents, signIn } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const numFileBlock = 6;
  useEffect(() => {
    dispatch(loadPaginatedFile(1, numFileBlock));
  }, [dispatch]);

  const onPageChange = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    dispatch(loadPaginatedFile(page, numFileBlock));
  };

  /**
   *  Anchor Element Ref
   */
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const onDownloadFile = () => {
    const id = anchorRef.current?.id;
    studentApi.downloadFile(id);
  };

  /**
   *  Modal Business Logic
   */
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const refsInModal = { inputRef, inputFileRef, textAreaRef };
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const file = (inputFileRef.current?.files![0] as unknown) as FileList;
    const fileName = inputRef.current?.value as string;
    const description = textAreaRef.current?.value as string;
    const formData = new FormData();
    formData.append("studentFile", (file as unknown) as Blob);
    formData.append("fileName", fileName);
    formData.append("description", description);
    formData.append("_id", signIn.user?._id as string);
    dispatch(uploadStudentFile(formData));
    dispatch(loadPaginatedFile());
    setIsOpen(false);
  };

  /**
   *  onDelete Business Logic
   */
  const [isDelete, toggleDelete] = useState(false);
  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleDelete(true);
  };
  const onDeleteCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    toggleDelete(false);
  };

  const deleteCollection = {
    isDelete,
    onDelete,
    onDeleteCancel
  };

  return (
    <ForStudentsTemplate
      TITLE={TITLE}
      SUBTITLE={SUBTITLE}
      DESC={DESC}
      anchorRef={anchorRef}
      refsInModal={refsInModal}
      modalIsOpen={modalIsOpen}
      forStudents={forStudents}
      openModal={openModal}
      closeModal={closeModal}
      onSubmit={onSubmit}
      onDownloadFile={onDownloadFile}
      onPageChange={onPageChange}
    />
  );
}

export default ForStudentsPage;
