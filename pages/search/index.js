import { useState, useEffect, useLayoutEffect } from "react";
import BlogService from "../../lib/services/BlogService";
import { useRouter } from "next/router";
import TopMenu from "../../components/home/TopMenu";
import Menu from "../../components/home/Menu";
import Share from "../../components/post/Share";
import NewsStrip from "../../components/post/NewsStrip";
import Link from "next/link";
const TRACKING_ID = "G-C6SVPY21K8"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const About = () => {
  const [postData, setPostData] = useState([]);
  const [state, setState] = useState({
    title: "",
  });
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.getBlogBySearch(state?.title);
      setPostData(blogResponse);
    };
    blogCheckResponse();
  }, [state]);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("state")) {
      setLang(sessionStorage.getItem("state"));
    } else {
      sessionStorage.setItem("state", lang);
    }
  }, []);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }
  }
  useEffect(() => {
    sessionStorage.setItem("state", lang);
  }, [lang]);
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
                <h1> {lang === "En" ? "Search" : "Поиск"}</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    className="inputSearch"
                    name="title"
                    type="text"
                    placeholder={
                      lang === "En"
                        ? "Enter the title of the article"
                        : "Введите название статьи"
                    }
                    onChange={handleChange}
                    value={state.title}
                    required
                  />
                </form>
              </div>
            </div>
            <div className="searchResult">
              {postData &&
                postData.map((item) => (
                  <div className="resultItem" key={item.id}>
                    <Link href={`/post/${item.link}`}>
                      <a>
                        <div className="viewsTitle">{item.title}</div>
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
            <Share />
          </section>
          <section className="sidebar">
            <NewsStrip />
          </section>
        </div>
      </div>
      <style jsx>{`
        .viewsTitle {
          font-size: 1.5rem;
          text-decoration: underline;
        }
        .viewsTitle {
          font-size: 1.5rem;
          text-decoration: underline;
        }
        .viewsTitle:hover {
          text-decoration: none;
        }
        .inputSearch {
          width: 100%;
          padding: 0.5rem;
        }
        .searchResult {
          margin: 2rem 0 2rem 0;
        }
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
export default About;
