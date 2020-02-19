import React from "react";
import ReactPaginate from "react-paginate";
import { NewsState } from "commons/__types__";
import "./style.css";

type PaginatorProps = {
  cards: NewsState;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function Paginator({
  cards,
  onPageChange
}: PaginatorProps): React.ReactElement {
  const { totalPages } = cards.news;
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
