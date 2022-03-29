"use strict";

import React, { useState, useEffect } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
import BlogService from "../../lib/services/BlogService";
import Pagination from "./Pagination";
const Blog = ({ startingPage = 1 }) => {
  const [page, setPage] = useState(startingPage);
  const [blogData, setBlogData] = useState([]);
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    const blogCheckResponse = async () => {
      const start = (page - 1) * 20;
      const blogResponse = await BlogService.get();
      setBlogData(blogResponse);
      setPageData(blogResponse.slice(start, start + 20));
    };
    blogCheckResponse();
  }, []);
  const changePage = (i) => {
    setPageData(blogData.slice((i - 1) * 20, (i - 1) * 20 + 20));
    setPage(i);
  };
  const addPosts = () => {
    setPageData(blogData.slice(0, pageData.length + 20));
  };
  const lastPage =
    blogData.length % 20
      ? Math.floor(blogData.length / 20) + 1
      : Math.floor(blogData.length / 20);
  return (
    <div className="blog-background">
      <div className="list">
        <div className="post-list">
          {pageData &&
            pageData
              .slice(0, 12)
              .map((item) => <Post key={item.id} data={item} />)}
        </div>
        <div className="most-read">
          <MostRead />
        </div>
        {pageData.length > 12 &&
         <div className="post-list bottom">
          {pageData &&
            pageData
              .slice(12)
              .map((item) => <Post key={item.id} data={item} />)}
        </div>}
        <div className="pagination">
          {pageData[0] && 
            <Pagination page={page} last={lastPage} moveToPage={changePage} addPosts={addPosts} />} {/* last to be changed */}
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 600px) {
          .list {
            display: flex;
            flex-direction: column;
            max-width: 75rem;
            justify-content: center;
          }
          .post-list {
            margin-top: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .bottom {
            margin: 0;
          }
          .pagination {
            margin-bottom: 2rem;
          }
        }
        .blog-background {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .most-read {
          margin-top: 2rem;
          height: 22rem;
        }
        .pagination {
          position: relative;
          height: 6rem;
        }
      `}</style>
    </div>
  );
};

export default Blog;
