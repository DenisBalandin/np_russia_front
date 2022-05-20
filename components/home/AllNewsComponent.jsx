"use strict";

import React, { useState, useEffect } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
import AllNewsPreview from "./AllNewsPreview";
import NewsService from "../../lib/services/NewsService";
import Pagination from "./Pagination";

const AllNewsComponent = ({ startingPage = 0 }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get(0);
      setNewsData(newsResponse);
    };
    newsCheckResponse();
  }, []);

  const changePage = (i) => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get(i);
      setNewsData(newsResponse);
    };
    newsCheckResponse();
  };
  return (
    <div className="blog-background">
      <div className="list">
        <div className="post-list">
          {newsData &&
            newsData.slice(0, 12).map((item) => (
              <div key={item.id}>
                <AllNewsPreview id={item.id} item={item} />
              </div>
            ))}
        </div>
        <div className="most-read">
          <MostRead />
        </div>
        {newsData?.length > 12 && (
          <div className="post-list bottom">
            {/* {newsData &&
              newsData
                .slice(12)
                .map((item) => <Post key={item.id} data={item} />)} */}
          </div>
        )}
        <div className="pagination">
          <Pagination moveToPage={changePage} category="news" />
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

export default AllNewsComponent;
