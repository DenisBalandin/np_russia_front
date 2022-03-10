"use strict";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NewsPreview from "./NewsPreview";
import NewsService from "../../lib/services/NewsService";
const News = () => {
  const [sliderCount, setSliderCount] = useState(0);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get();
      setNewsData(newsResponse);
    };
    newsCheckResponse();
  }, []);

  useEffect(() => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get();
      setNewsData(newsResponse.slice(sliderCount));
    };
    newsCheckResponse();
  }, [sliderCount]);
  return (
    <div className="news-background">
      <div className="container">
        <div className="heading">
          <div className="title">Новости</div>
          <div className="rightSide">
            <div className="allNews">
              <Link href="/news">
                <a>все новости</a>
              </Link>
            </div>
            <div className="arrows">
              <div
                className="arrow"
                onClick={() => {
                  if (sliderCount > 0) {
                    setSliderCount(sliderCount - 1);
                  }
                }}
              >
                ←
              </div>
              <div
                className="arrow"
                onClick={() => {
                  if (sliderCount < newsData.length) {
                    setSliderCount(sliderCount + 1);
                  }
                }}
              >
                →
              </div>
            </div>
          </div>
        </div>
        <div className="carousel">
          {newsData.map((item, id) => (
            <div key={item.id}>
              <NewsPreview id={id} item={item} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: auto;
          padding: 0 .5rem 0 .5rem;
        }
        .carousel {
          display: flex;
          overflow: hidden;
          max-width: 75rem;
          margin: 0 auto;
        }
        .title {
          color: #d92121;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .news-background {
          justify-content: center;
          background-color: #f2f2f2;
          width: 100%;
          left: 0;
        }
        .news-box {
          padding-left: 3rem;
          border-left: 1px solid lightgray;
        }
        .start {
          border: none;
          padding: 0;
        }
        .arrows {
          display: flex;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-style: monospace;
        }
        .arrow {
          display: flex;
          border: 0.15rem solid grey;
          padding-bottom: 0.19rem;
          justify-content: center;
          align-items: center;
          border-radius: 99999px;
          height: 2rem;
          width: 2rem;
        }
        .arrow:hover {
          color: red;
          cursor: pointer;
        }
        .heading {
          display: flex;
          justify-content: center;
          height: 10%;
          max-width: 75rem;
          margin: 1.5rem auto;
        }
        .rightSide {
          display: flex;
          visibility: visible;
          align-items: center;
          gap: 1rem;
          margin-left: auto;
        }
        @media (min-width:77rem) {
          .container{
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default News;
