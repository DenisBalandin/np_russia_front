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
  });
  return (
    <div>
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      <hr />
      {postData && postData?.length <= 0 ? (
        <div className="load">Loading</div>
      ) : (
        <>
          {" "}
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
        </>
      )}
      <Footer />
      <style jsx>{`
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
    </div>
  );
};
export default Post;
