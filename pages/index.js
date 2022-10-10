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
            <title>NP Russia</title>
            <title>
              iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
            </title>
            <meta
              name="description"
              content="Франшиза Fallout празднует свое 25-летие, поэтому дату отмечают различные разработчики и студии, так или иначе приложившие свою руку к играм серии. Выступила и Obsidian Entertainment. Компания заявила, что у нее..."
            />
            <link
              rel="canonical"
              href="https://shazoo.ru/2022/10/11/133568/obsidian-entertainment-v-dannyi-moment-ne-rabotaet-nad-igroi-po-fallout"
            ></link>
            <meta
              property="og:title"
              content="Obsidian Entertainment в данный момент не работает над игрой по Fallout"
            ></meta>
            <meta
              property="og:description"
              content="В начале года ходили слухи, что Microsoft и Obsidian ведут переговоры о потенциальном сиквеле Fallout: New Vegas, но сейчас у студии попросту нет свободных рук"
            ></meta>
            <meta
              property="og:image"
              content="https://cdn.shazoo.ru/647854_72hPuv5_s7evh0tiol.jpg"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
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
