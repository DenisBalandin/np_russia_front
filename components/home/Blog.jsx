"use strict";

import React, { useState, useEffect } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
import BlogService from "../../lib/services/BlogService";
import Pagination from "./Pagination";
const Blog = ({ startingPage = 0 }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get(0);
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  }, []);

  const changePage = (i) => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get(i);
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  };

  return (
    <div className="blog-background">
      <div className="list">
        <div className="post-list">
          {blogData &&
            blogData
              .slice(0, 12)
              .map((item) => <Post key={item.id} data={item} />)}
        </div>
        <div className="most-read">
          <MostRead />
        </div>
        {blogData?.length > 12 && (
          <div className="post-list bottom">
            {blogData &&
              blogData
                .slice(12)
                .map((item) => <Post key={item.id} data={item} />)}
          </div>
        )}
        <div className="pagination">
          <Pagination moveToPage={changePage} category="blog" />
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
