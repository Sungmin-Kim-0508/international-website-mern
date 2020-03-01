import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

type PaginatorProps = {
  totalPages?: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function Paginator({
  totalPages,
  onPageChange
}: PaginatorProps): React.ReactElement {
  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPages as number}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        breakLabel={"..."}
        onPageChange={onPageChange}
        activeClassName={"active"}
        containerClassName={"pagination"}
      />
    </>
  );
}

export default Paginator;
