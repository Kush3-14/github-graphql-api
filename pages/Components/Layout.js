import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/Home.module.css";

const Layout = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const reposPerPage = 5;
  const offset = currentPage * reposPerPage;
  const currentRepos = props.allRepos.slice(offset, offset + reposPerPage);

  const pageCount = Math.ceil(props.allRepos.length / reposPerPage);

  return (
    <>
      <div className="container" style={{ float: "right" }}>
        <h1>
          📌
          <u>All Repos ({props.allRepos.length})</u>
        </h1>
        <div className={styles.reposContainer}>
          {currentRepos.map((item) => {
            return (
              <a key={item.id} href={item.url} className={styles.card}>
                <h3>{item.name}</h3>
              </a>
            );
          })}
        </div>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.paginationLink}
          nextLinkClassName={styles.paginationLink}
        />
      </div>
    </>
  );
};

export default Layout;
