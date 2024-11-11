import './blogPagination.css'
import { useParams, Link } from 'react-router-dom'

const BlogPagination = ({
  totalPosts,
  itemsPerPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
  paginate,
  handleNextbtn,
  handlePrevbtn,
  disabled
}) => {
  const { pagenumber } = useParams()

  const pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pages.push(i)
  }

  const productTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={`page-item ${
            currentPage == number || currentPage === pagenumber
              ? 'active'
              : null
          }`}
        >
          <Link
            onClick={productTop}
            to={`/blog/page/${number}`}
            class='page-link v-cursor'
          >
            {number}
          </Link>
        </li>
      )
    } else {
      return null
    }
  })

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li class='page-link v-cursor' onClick={handleNextbtn}>
        {' '}
        &hellip;{' '}
      </li>
    )
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li class='page-link v-cursor' onClick={handlePrevbtn}>
        {' '}
        &hellip;{' '}
      </li>
    )
  }

  return (
    <>
      <ul className='pagination justify-content-center mb-5'>
        <li className='page-item' onClick={productTop}>
          <Link
            to={`/blog/page/${currentPage - 1}`}
            className={`page-link ${
              currentPage == pages[0] ? 'disabled' : 'active'
            }`}
            onClick={handlePrevbtn}
          >
            Prev
          </Link>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li className='page-item' onClick={productTop}>
          <Link
            to={`/blog/page/${currentPage + 1}`}
            className={`page-link ${
              currentPage == pages[pages.length - 1] ? 'disabled' : 'active'
            }`}
            onClick={handleNextbtn}
          >
            Next
          </Link>
        </li>
      </ul>
    </>
  )
}

export default BlogPagination
