import React from "react";
import "./pagination.css";

const Pagination = (props) => {
  return (
    <div id="pagination-button">
      <button
        onClick={props.onclick}
        id={props.page == props.currentPage ? "active" : ""}
      >
        {props.page}
      </button>
    </div>
  );
};

export default Pagination;
