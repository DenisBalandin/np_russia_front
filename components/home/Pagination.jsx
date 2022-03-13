"use strict";

import React, { useState } from "react";
import paginationArray from "../../lib/paginationArray";

const Pagination = ({ page = 1, last, moveToPage, addPosts }) => {
  if (page > last || page <= 0) {
    return;
  }
  let inner = paginationArray(page, last);
  return (
    <div className="pag-background">
      <div className="pag-box mob" onClick={() => addPosts()}>
        Показать ещё
      </div>
      <div className="pag-box wide-screen">
        {page > 1 ? (
          <div
            className="clickable back"
            onClick={() => {
              moveToPage(page - 1);
            }}
          >
            Назад
          </div>
        ) : (
          <div className="unclickable back">Назад</div>
        )}
        {inner.map((i, index) =>
          i == page ? (
            <div className="unclickable square" key={index}>
              {i}
            </div>
          ) : (
            <div
              className="clickable square"
              onClick={() => {
                moveToPage(i);
              }}
              key={index}
            >
              {i}
            </div>
          )
        )}
        {page == last ? (
          <div className="unclickable forward">Вперёд</div>
        ) : (
          <div
            className="clickable forward"
            onClick={() => {
              moveToPage(page + 1);
            }}
          >
            Вперёд
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
          }
          .forward {
            flex-grow: 1;
            border-right: 1px solid gray !important;
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
