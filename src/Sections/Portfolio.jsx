import React, { useState, useEffect } from "react";
import Portfolios from "../components/Portfolios.component";
import { FeatureSubtitle } from "../components/Paragraph";
import axios from "axios";
import Loader from "../components/Loader";
//import { Pagination } from "@material-ui/lab";
import ReactPaginate from "react-paginate";

const url = "https://memories-projects.herokuapp.com/posts";

const Portfolio = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 4;
  const pagesVisited = pageNumber * postsPerPage;
  const pageCount = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section id="work" className="portfolio">
      <div className="inner bottom transition2">
        <a href="/" className="featured-title">
          My Projects
        </a>
        <FeatureSubtitle text="/ All My Projects With Live Link /" />
      </div>
      {!posts.length ? (
        <Loader />
      ) : (
        posts
          .slice(pagesVisited, pagesVisited + postsPerPage)
          .map((post) => (
            <Portfolios
              key={post.id}
              title={post.title}
              creator={post.creator}
              message={post.message}
              tags={post.tags}
              selectedFile={post.selectedFile}
            />
          ))
      )}
      {/* <Pagination 
        className="pagination"
        count={pageCount || 1}
        color="primary"
        onChange={changePage}
      /> */}
      <ReactPaginate
        className="pagination-post stagger1"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount || 1}
        onPageChange={changePage}
        containerClassName={"pagination-post stagger1"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </section>
  );
};

export default Portfolio;
