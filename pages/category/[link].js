import { useState, useEffect, useLayoutEffect } from "react";
import BlogService from "../../lib/services/BlogService";
import { useRouter } from "next/router";
import TopMenu from "../../components/home/TopMenu";
import Menu from "../../components/home/Menu";
import Share from "../../components/post/Share";
import NewsStrip from "../../components/post/NewsStrip";
import Link from "next/link";
import Post from "../../components/home/Post";
import Pagination from "../../components/home/Pagination";

const Category = () => {
  const [postData, setPostData] = useState([]);
  const [state, setState] = useState({
    title: "",
  });
  const [lang, setLang] = useState("En");

  const router = useRouter();

  useEffect(() => {
    const blogCheckResponse = async () => {
      const { link } = router.query;
      const blogResponse = await BlogService.getBlogByCategory(link);
      setPostData(blogResponse);
    };
    if (postData?.length <= 0) blogCheckResponse();
  });

  console.log(postData);
  // useEffect(() => {
  //   const blogCheckResponse = async () => {
  //     const blogResponse = await BlogService.getBlogBySearch(state?.title);
  //     setPostData(blogResponse);
  //   };
  //   blogCheckResponse();
  // }, [state]);

  // useLayoutEffect(() => {
  //   if (sessionStorage.getItem("state")) {
  //     setLang(sessionStorage.getItem("state"));
  //   } else {
  //     sessionStorage.setItem("state", lang);
  //   }
  // }, []);

  // function handleChange(e) {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // }
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   for (let [key, value] of Object.entries(state)) {
  //     formData.append(key, value);
  //   }
  // }
  // useEffect(() => {
  //   sessionStorage.setItem("state", lang);
  // }, [lang]);
  const changePage = (i) => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get(i);
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  };
  return (
    <div>
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      <div className="blog-background">
        <div className="list">
          <div className="post-list bottom">
            {postData &&
              postData.map((item) => <Post key={item.id} data={item} />)}
          </div>
          <div className="pagination">
            <Pagination moveToPage={changePage} />
          </div>
        </div>
        <style jsx>{`
          @media (min-width: 600px) {
            .list {
              display: flex;
              flex-direction: column;
              max-width: 75rem;
              justify-content: center;
            }
            .post-list {
              margin-top: 2rem;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
            }
            .bottom {
              margin: 0;
            }
            .pagination {
              margin-bottom: 2rem;
            }
          }
          .blog-background {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .most-read {
            margin-top: 2rem;
            height: 22rem;
          }
          .pagination {
            position: relative;
            height: 6rem;
          }
        `}</style>
      </div>
    </div>
  );
};
export default Category;
