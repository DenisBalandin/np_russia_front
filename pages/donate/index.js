import React, { useState, useEffect } from "react";
import BlogService from "../../lib/services/BlogService";
import { useRouter } from "next/router";
import TopMenu from "../../components/home/TopMenu";
import Menu from "../../components/home/Menu";
import TopCategory from "../../components/post/TopCategory";
import MainImage from "../../components/post/MainImage";
import Content from "../../components/post/Content";
import Footer from "../../components/home/Footer";
import MostRead from "../../components/home/MostRead";
import Share from "../../components/post/Share";
import NewsStrip from "../../components/post/NewsStrip";

const Donate = () => {
  const [postData, setPostData] = useState([]);

  return (
    <div>
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      {/* <MainImage post={postData} /> */}
      <div className="content-background">
        <div className="content-box">
          <section className="content">
            <div className="content-inner">
              <div id="left">
                <p>Помощь сайту</p>
                <p>Друзья!</p>

                <p>
                  Уже 6 лет сайт NP Russia работает, вызывает споры, интересует.
                  Все это происходит исключительно благодаря вам!
                </p>
                <p>
                  Для спонсирования нашего проекта, вы можете перевести любую
                  сумму на наш Крипто кошелек.
                </p>
                <p>Wallet: 1BoatSLRHtKNngkdXEeobR76b53LETtpyT</p>
              </div>
            </div>
            <Share />
          </section>
          <section className="sidebar">
            <NewsStrip />
          </section>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 0px) {
          .sidebar {
            display: none !important;
          }
          .content {
            width: 100%;
          }
          .content-box {
            padding: 0 1rem;
            position: relative;
            display: flex;
            flex-wrap: no-wrap;
            gap: 1rem;
            margin-top: 3rem;
            overflow: hidden;
          }
        }
        @media (min-width: 840px) {
          .sidebar {
            display: initial !important;
            width: 30% !important;
          }
          .content {
            width: 75%;
          }
        }
        @media (min-width: 1030px) {
          .content-box {
            width: 90%;
          }
          .sidebar {
            width: 27.5% !important;
          }
        }
        @media (min-width: 1240px) {
          .content-box {
            width: 75rem;
          }
        }
        @media (min-width: 1550px) {
          .content-box {
            // width: 66.66%;
          }
          .sidebar {
            margin-left: auto !important;
            // width: 25% !important;
          }
        }
        @media (min-width: 1860px) {
          .content-box {
            // width: 50%;
          }
        }
        .content-background {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        .content-box section {
          display: flex;
          flex-direction: column;
        }
        .content-inner {
          font-size: min(1.3rem);
          line-height: min(2rem);
          font-weight: 200;
        }
      `}</style>
    </div>
  );
};
export default Donate;
