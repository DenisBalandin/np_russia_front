import React, { useState, useEffect } from "react";
import Head from "next/head";
import TopMenu from "../components/home/TopMenu";
import Slider from "../components/home/Slider";
import Menu from "../components/home/Menu";
import News from "../components/home/News";
import Blog from "../components/home/Blog";
import Footer from "../components/home/Footer";
import BlogService from "../lib/services/BlogService";
import Loading from "/data/files/images/giphy.gif";
import Image from "next/dist/client/image";

export default function Home() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get(0);
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  }, []);

  return (
    <>
      {blogData.length > 0 ? (
        <div>
          <Head>
            <html lang="ru" prefix="og: http://ogp.me/ns#" />
            <meta property="og:url" content="https://example.com" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="path/to/photo.jpg?v=4" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:site_name" content="ghjghjgjhghjghj" />
            <meta property="og:title" content="dfghfghfgj" />
            <meta
              property="og:description"
              content="sdfsfsdfsdfsdfsdfsdfdsfsdf"
            />
          </Head>
          <TopMenu />
          <Slider />
          <div className="Menu">
            <Menu />
          </div>
          <div className="news-wrap">
            <News />
          </div>
          <Blog />
          <Footer />
        </div>
      ) : (
        <div className="blog-background">
          <Image src={Loading} height="300rem" width="300rem" alt="" />
        </div>
      )}
      <style jsx>
        {`
          .blog-background {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 15%;
          }
          @media (min-width: 0px) {
            .Menu {
              visibility: hidden;
              position: absolute;
            }
          }
          @media (min-width: 800px) {
            .Menu {
              visibility: visible;
              max-width: 100%;
              position: -webkit-sticky;
              position: sticky;
              height: auto;
              top: 0;
              z-index: 2;
            }
          }
          .news-wrap {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
}
