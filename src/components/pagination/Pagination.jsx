import React from "react";
import Pagination from "react-bootstrap/pagination";

export const PaginationBasic = ({ pages, active, handleOnPaginationClick }) => {
  let items = [];
  for (let num = 1; num <= pages; num++) {
    items.push(
      <Pagination.Item
        key={num}
        active={num === active}
        onClick={() => handleOnPaginationClick(num)}
      >
        {num}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
};
