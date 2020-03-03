import React from "react";
import * as Sc from "./style";
import uuid4 from "uuid4";
import { Button, Paginator, Spinner, Anchor } from "components";
import { ForStudentsState } from "pages/forStudents/types";

type TableProps = {
  forWhom?: ForStudentsState;
  anchorRef?: React.RefObject<HTMLAnchorElement>;
  onDownloadFile?: () => void;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function TableGenerator({
  anchorRef,
  data,
  onDownloadFile
}: {
  anchorRef?: React.RefObject<HTMLAnchorElement>;
  data: ForStudentsState;
  onDownloadFile?: () => void;
}): React.ReactElement {
  const {
    file: { docs }
  } = data;
  return (
    <Sc.Table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {docs.map(item => {
          return (
            <tr key={uuid4()}>
              <td>
                <Anchor
                  id={item.fileUrl}
                  anchorRef={anchorRef}
                  onClick={onDownloadFile}
                >
                  {item.fileName}
                </Anchor>
              </td>
              {/* <td>{item.description}</td> */}
              <td>
                LoremIpsumLoremIpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumIpsumLorem IpsumIpsumLorem
                IpsumIpsumLorem Ipsum
              </td>
            </tr>
          );
        })}
      </tbody>
    </Sc.Table>
  );
}

function Table({
  forWhom,
  anchorRef,
  onDownloadFile,
  onPageChange
}: TableProps): React.ReactElement {
  const data = forWhom as ForStudentsState;

  return (
    <Sc.Container>
      {data.isLoading ? (
        <Spinner />
      ) : (
        <TableGenerator
          data={data}
          anchorRef={anchorRef}
          onDownloadFile={onDownloadFile}
        />
      )}
      <Sc.PaginatorWarpper>
        <Sc.PaginatorWarpper>
          <Paginator
            onPageChange={onPageChange}
            totalPages={forWhom?.file.totalPages as number}
          />
        </Sc.PaginatorWarpper>
      </Sc.PaginatorWarpper>
    </Sc.Container>
  );
}

export default Table;
