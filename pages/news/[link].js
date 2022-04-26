import React, { useState, useEffect } from "react";
import NewsService from "../../lib/services/NewsService";
import { useRouter } from "next/router";
import TopMenu from "../../components/home/TopMenu";
import Menu from "../../components/home/Menu";
import TopCategory from "../../components/post/TopCategory";
import MainImage from "../../components/post/MainImage";
import Content from "../../components/post/Content";
import Footer from "../../components/home/Footer";
import MostRead from "../../components/home/MostRead";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const newsCheckResponse = async () => {
      const { link } = router.query;
      const newsResponse = await NewsService.getOneByLink(link);
      setNewsData(newsResponse);
    };
    if (newsData?.length <= 0) newsCheckResponse();
  });
  return (
    <div>
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      <hr />
      <TopCategory
        category={newsData?.category}
        viewCount={newsData?.views}
        date={newsData?.date}
      />
      <MainImage post={newsData} />
      <Content article={newsData?.text} />
      <div className="newest">
        <MostRead newest />
      </div>
      <Footer />
      <style jsx>{`
        @media (min-width: 0px) {
          .Menu {
            visibility: hidden;
            position: absolute;
          }
          hr {
            width: 100%;
            height: 0.3rem;
            background-color: black;
            border: 0;
            margin: 0;
          }
          .newest {
            position: relative;
            min-height: 20rem;
            margin-bottom: 1rem;
          }
        }
        @media (min-width: 800px) {
          hr {
            display: none;
          }
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
      `}</style>
    </div>
  );
};

export default News;
