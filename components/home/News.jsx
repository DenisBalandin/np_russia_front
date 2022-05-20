"use strict";

import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import NewsPreview from "./NewsPreview";
import NewsService from "../../lib/services/NewsService";
const News = () => {
  const [sliderCount, setSliderCount] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get();
      setNewsData(newsResponse);
    };
    newsCheckResponse();
  }, []);
  useLayoutEffect(() => {
    if (sessionStorage.getItem("state")) {
      setLang(sessionStorage.getItem("state"));
    } else {
      sessionStorage.setItem("state", lang);
    }
  }, []);

  useEffect(() => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get();
      setNewsData(newsResponse?.slice(sliderCount));
    };
    newsCheckResponse();
  }, [sliderCount]);
  useEffect(() => {
    sessionStorage.setItem("state", lang);
  }, [lang]);
  return (
    <div className="news-background">
      <div className="container">
        <div className="heading">
          <Link href="/news">
            <a>
              <div className="title">{lang === "En" ? "News" : "Новости"}</div>
            </a>
          </Link>
          <div className="rightSide">
            <div className="allNews">
              <Link href="/news">
                <a>{lang === "En" ? "All News" : "Все Новости"}</a>
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
          {newsData?.map((item, id) => (
            <div key={item.id}>
              <NewsPreview id={id} item={item} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: auto;
          padding: 0 0.5rem 0 0.5rem;
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
          text-decoration: underline;
        }
        .title:hover {
          text-decoration: none;
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
        .allNews {
          position: absolute;
          visibility: hidden;
        }
        @media (min-width: 77rem) {
          .container {
            padding: 0;
          }
        }
        @media (min-width: 600px) {
          .allNews {
            position: relative;
            visibility: visible;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.6rem;
            letter-spacing: 1px;
          }
          .allNews:hover {
            color: red;
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
};

export default News;
