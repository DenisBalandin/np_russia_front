"use strict";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dateProcessor from "../../lib/dateProcessor";
import views from "/public/images/views.png";

// import imgSrc from '/data/files/images/blog/detailed_picture (19).jpg'
const Post = ({ data }) => {
  const pageSrc = `/post/${data.link}`; /* to be changed */
  const categoryLink = data.category; /* to be changed */
  const imgSrc = data.image;
  return (
    <div className="post-background">
      <Link href={pageSrc}>
        <a>
          <div className="pic">
            <Image
              priority
              src={imgSrc}
              layout="fill"
              objectFit="cover"
              alt="views"
            />
          </div>
        </a>
      </Link>
      <div className="category">
        {data?.category.split("; ").map((item) => (
          <Link href={`/category/${item}`} key={item}>
            <a className="categoryItem">
              <span>{item}&nbsp; </span>
            </a>
          </Link>
        ))}
      </div>
      <Link href={pageSrc}>
        <a>
          <div className="title" title={data.title}>
            {data.title}
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {/* <div className="description" title={data.description}>
            {data.description}
          </div> */}
        </a>
      </Link>
      <div className="date">
        {dateProcessor(data.date)}
        <div className="views">
          <div className="image">
            <img src={views} alt="" />
          </div>
          <div className="views-count">{data.views}</div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 0px) {
          .post-background {
            padding: 0.5rem 0.5rem 0 0.5rem;
            display: flex;
            flex-direction: column;
          }
          .pic {
            position: relative;
            width: 100%;
            min-height: 20rem;
          }
          .category {
            border-top: 5px solid #d92121;
            overflow: hidden;
            margin-right: auto;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #d92121;
            font-weight: bold;
            font-size: 1rem;
            padding: 0.5rem;
          }
          .title {
            font-size: 2rem;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            margin: 0 0.5rem 0 0.5rem;
            color: #1a1a1a;
          }
          .description {
            font-size: 1.2rem;
            color: #1a1a1a;
            margin: 0 0.5rem 0 0.5rem;
            line-height: 1.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            margin: 0.5rem 0 0 0.5rem;
          }
          .date {
            display: flex;
            margin: 0.5rem;
            font-size: 0.8rem;
            font-weight: bold;
            color: #999999;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .views {
            display: flex;
            margin-left: 2rem;
          }
          .image {
            max-height: 0.9rem;
            margin-top: 0.2rem;
            overflow: hidden;
          }
          .views-count {
            margin-left: 0.5rem;
          }
        }
        @media (min-width: 600px) {
          .post-background {
            padding: 0;
            max-width: 16rem;
            margin: 1rem;
            transition: all 2s;
          }
          .pic {
            min-height: 15rem;
            max-width: 25rem;
          }
          .category {
            font-weight: bold;
            cursor: pointer;
            font-size: 0.75rem;
            padding: 0.5rem 0.5rem 0.5rem 0;
          }
          categoryItem {
            color: #d92121;
          }
          .categoryItem:hover {
            color: #999999;
          }
          .title {
            margin: 0;
            font-size: 1.5rem;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.2s;
          }
          .title:hover {
            color: #d92121;
          }
          .description {
            font-size: 1rem;
            margin: 0.75rem 0 0.75rem 0;
          }
          .date {
            margin: 0;
            display: flex;
            font-size: 0.7rem;
          }
          .image {
            max-height: 0.9rem;
            margin-top: 0.1rem;
          }
          .views-count {
            margin-top: 0.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Post;
