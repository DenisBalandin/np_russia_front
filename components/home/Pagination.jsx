"use strict";

import { useState, useEffect, useLayoutEffect } from "react";
import paginationArray from "../../lib/paginationArray";
import BlogService from "../../lib/services/BlogService";
import NewsService from "../../lib/services/NewsService";

const Pagination = ({ moveToPage, category, catlink }) => {
  const [page, setPage] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [countPgae, setCountPage] = useState(0);
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const blogCheckResponse = async () => {
      const pageArr = [];
      let getRowsCount = "";
      if (category === "blog") {
        getRowsCount = await BlogService.getBlogRowsCount();
      }
      if (category === "news") {
        getRowsCount = await NewsService.getNewsRowsCount();
      }
      if (category === "cat") {
        getRowsCount = await BlogService.getBlogCategoryRowsCount(catlink);
      }
      for (let i = 0; i <= getRowsCount && getRowsCount; i++) {
        pageArr.push(i);
      }
      setPageArray(pageArr);
      setCountPage(getRowsCount);
    };

    blogCheckResponse();
  }, []);

  useEffect(() => {
    if (category === "cat") {
      const blogCheckResponse = async () => {
        const pageArr = [];
        let getRowsCount = "";

        getRowsCount = await BlogService.getBlogCategoryRowsCount(catlink);

        for (let i = 0; i <= getRowsCount && getRowsCount; i++) {
          pageArr.push(i);
        }
        setPageArray(pageArr);
        setCountPage(getRowsCount);
      };
      setPage(0);
      blogCheckResponse();
    }
  }, [catlink]);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("state")) {
      setLang(sessionStorage.getItem("state"));
    } else {
      sessionStorage.setItem("state", lang);
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem("state", lang);
  }, [lang]);

  return (
    <div className="pag-background">
      <div className="pag-box mob" onClick={() => addPosts()}>
        {lang === "En" ? "Show more" : "Показать ещё"}
      </div>
      <div className="pag-box wide-screen">
        {page >= 1 ? (
          <div
            className="clickable back"
            onClick={() => {
              moveToPage(page - 1);
              setPage(page - 1);
            }}
          >
            {lang === "En" ? "Forward" : "Вперёд"}
          </div>
        ) : (
          <div className="unclickable back">
            {" "}
            {lang === "En" ? "Forward" : "Вперёд"}
          </div>
        )}
        {/* {pageArray.map((i, index) =>
          i == page ? (
            <div className="unclickable square" key={index}>
              {i + 1}
            </div>
          ) : (
            <div
              className="clickable square"
              onClick={() => {
                moveToPage(i);
                setPage(i);
              }}
              key={index}
            >
              {i + 1}
            </div>
          )
        )} */}
        {/* {pageArray.slice(page, page + 3).map((i, index) =>
          i == page ? (
            <div className="unclickable square" key={index}>
              {i + 1}
            </div>
          ) : (
            <div
              className="clickable square"
              onClick={() => {
                moveToPage(i);
                setPage(i);
              }}
              key={index}
            >
              {i + 1}
            </div>
          )
        )} */}
        {page === countPgae ? (
          <div className="unclickable forward">
            {lang === "En" ? "Back" : "Назад"}
          </div>
        ) : (
          <div
            className="clickable forward"
            onClick={() => {
              let mpage = 1;
              if (page >= countPgae) {
                mpage;
              }
              moveToPage(page + mpage);
              setPage(page + mpage);
            }}
          >
            {lang === "En" ? "Back" : "Назад"}
          </div>
        )}
      </div>
      <style jsx>{`
        .mob {
          align-items: center;
          border: 2px solid black;
        }
        .mob:hover {
          transition: all 0.2s;
          color: #d92121;
          cursor: pointer;
        }
        .pag-box {
          display: flex;
          justify-content: center;
          margin: 0.5rem;
          font-size: 0.7rem;
          line-height: 1.5rem;
          font-weight: bold;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          vertical-align: middle;
          text-align: center;
          height: 3rem;
        }
        .wide-screen {
          position: absolute;
          width: 98%;
          left: 0;
          visibility: hidden;
          display: none;
        }
        @media (min-width: 600px) {
          .pag-background {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .mob {
            position: absolute;
            visibility: hidden;
            display: none !important;
          }
          .wide-screen {
            visibility: visible;
            display: flex;
          }
          .pag-box {
            margin-top: 2rem;
          }
          .unclickable {
            color: gray;
          }
          .clickable:hover {
            transition: all 0.2s;
            color: #d92121;
            cursor: pointer;
          }
          .pag-box div {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid gray;
            border-right: 0;
          }
          .square {
            width: 3rem;
          }
          .back {
            flex-grow: 1;
            padding: 0 2rem 0 2rem;
          }
          .forward {
            flex-grow: 1;
            border-right: 1px solid gray !important;
            padding: 0 2rem 0 2rem;
          }
          @media (min-width: 79rem) {
            .wide-screen {
              left: 0;
              position: relative;
              width: 75rem;
            }
          }
        }
      `}</style>
    </div>
  );
};
export default Pagination;
