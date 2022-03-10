"use strict";

import React, { useState, useEffect } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
import BlogService from "../../lib/services/BlogService";
const Blog = ({ page=1 }) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get();
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  }, []);
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
        <div className="post-list">
          {blogData &&
            blogData
              .slice(12, 20)
              .map((item) => <Post key={item.id} data={item} />)}
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
        }
        .blog-background {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .most-read {
          margin-top: 2rem;
          height: 24rem;
        }
      `}</style>
    </div>
  );
};

export default Blog;
