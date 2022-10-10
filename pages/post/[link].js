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
import Image from "next/dist/client/image";
import Loading from "/data/files/images/giphy.gif";
import Head from "next/head";

const Post = () => {
  const [postData, setPostData] = useState([]);
  const router = useRouter();
  const { link } = router.query;
  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.getOneByLink(link);
      setPostData(blogResponse);
    };
    if (postData?.length <= 0) blogCheckResponse();
    if (postData && postData?.length === 0) blogCheckResponse();
  });
  return (
    <>
      {postData && postData?.length !== 0 ? (
        <div>
          <Head>
            <title>{postData?.title}</title>
            <meta property="og:url" content={link} />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="your fb app id" />
            <meta property="og:title" content={postData?.title} />
            <meta name="twitter:card" content="summary" />
            <meta property="og:description" content={postData?.text} />
            <meta property="og:image" content={postData?.image} />
          </Head>
          <TopMenu />
          <div className="Menu">
            <Menu />
          </div>
          <hr />{" "}
          <TopCategory
            category={postData?.category}
            viewCount={postData?.views}
            date={postData?.date}
          />
          <MainImage post={postData} />
          <Content
            article={postData?.text}
            link={link}
            title={postData?.title}
          />
          <div className="newest">
            <MostRead newest />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="blog-background">
          <Image src={Loading} height="300rem" width="300rem" alt="" />
        </div>
      )}
      <style jsx>{`
        .blog-background {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 15%;
        }
        .load {
          width: 2rem;
          margin: 5rem auto;
          font-size: 3rem;
        }

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
    </>
  );
};
export default Post;
