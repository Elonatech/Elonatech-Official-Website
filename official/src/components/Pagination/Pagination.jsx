import { Link, useSearchParams } from "react-router-dom";
import './pagination.css';

const Pagination = ({ totalPosts, itemsPerPage, maxPageNumberLimit, minPageNumberLimit, currentPage, paginate, handleNextbtn, handlePrevbtn }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pages.push(i);
  }

  const productTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  const handlePageClick = (number) => {
    paginate(number);
    setSearchParams({ page: number.toString() });
    productTop();
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
          <a onClick={() => handlePageClick(number)} className="page-link v-cursor">{number}</a>  
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="page-link v-cursor" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="page-link v-cursor" onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePrevbtn();
      setSearchParams({ page: (currentPage - 1).toString() });
      productTop();
    }
  }

  const handleNextClick = () => {
    if (currentPage < pages.length) {
      handleNextbtn();
      setSearchParams({ page: (currentPage + 1).toString() });
      productTop();
    }
  }

  return (
    <>
      <ul className="pagination justify-content-center mb-5">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" onClick={handlePrevClick}>Prev</a>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li className={`page-item ${currentPage === pages.length ? "disabled" : ""}`}>
          <a className="page-link" onClick={handleNextClick}>Next</a>
        </li>
      </ul>     
    </>
  );
}

export default Pagination;