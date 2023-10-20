import React from 'react'
import './pagination.css'

const Pagination = (props) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(props.totalEvents/props.eventPerPage); i++) {
    pages.push(i)
  }
  return (
    <div id='pagination-button'>
      {
        pages.map((page, idx) => {
          return (
          <button
          key={idx}
          onClick={() => props.setCurrentPage(page)}
          id={page == props.currentPage ? 'active' : ''}
          >
            {page}
          </button>
          )
        })
      }
    </div>
  )
}

export default Pagination