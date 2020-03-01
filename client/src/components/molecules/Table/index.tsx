import React from "react";
import * as Sc from "./style";
import { Tr, Td, Th, Button, Paginator } from "components";

type TableProps = {
  onPageChange: (selectedItem: { selected: number }) => void;
};

function Table({ onPageChange }: TableProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.Table></Sc.Table>
      <Sc.ButtonsAndPaginaatorWarpper>
        <Button theme="success">Upload File</Button>
        <Paginator onPageChange={onPageChange} />
        <Button theme="danger">Remove File</Button>
      </Sc.ButtonsAndPaginaatorWarpper>
    </Sc.Container>
  );
}

export default Table;
