import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

function PaginationMenu (props) {
  let page = props.page
  let next = parseInt(page) + parseInt(1)
  let beforeNum = parseInt(page) - parseInt(1)
  let arrow, before

  if(props.page <= 1){
    arrow = (
      <PaginationItem disabled>
        <PaginationLink previous  href="#" />
      </PaginationItem>
    )
  } else {
    arrow = (
      <PaginationItem>
        <PaginationLink previous  href={page-1} />
      </PaginationItem>
    )
    before = (
      <PaginationItem >
        <PaginationLink href={page-1}>
          {beforeNum}
        </PaginationLink>
      </PaginationItem>
    )
  }
  return (
    <div>
      <Pagination aria-label="Page navigation example">
        {arrow}
        {before}
        <PaginationItem active>
          <PaginationLink  href={page}>
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem >
          <PaginationLink href={next}>
            {next}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink next href={next} />
        </PaginationItem>
      </Pagination>
    </div>
  )

}

export default PaginationMenu
