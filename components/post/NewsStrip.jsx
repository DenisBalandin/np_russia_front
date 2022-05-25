import Link from "next/link";
import { useState, useEffect, useLayoutEffect } from "react";
import newsArray from "../../lib/newsArray";
import NewsService from "../../lib/services/NewsService";

const NewsStrip = () => {
  const [newsData, setNewsData] = useState([]);
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const newsCheckResponse = async () => {
      const newsResponse = await NewsService.get();
      setNewsData(newsArray(newsResponse?.slice(0, 5)));
    };
    newsCheckResponse();
  }, []);
  useLayoutEffect(() => {
    if (sessionStorage.getItem("state")) {
      setLang(sessionStorage.getItem("state"));
    } else {
      sessionStorage.setItem("state", lang);
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem("state", lang);
  }, [lang]);
  return (
    <div className="ns-background">
      <div className="ns-title">{lang === "En" ? "News" : "Новости"}</div>
      {newsData?.map((item, index) => (
        <div className="ns-preview ns-inner" key={index}>
          <div className="ns-time ns-date">{item.time}</div>
          <div className="ns-news">
            <Link href={"/news/" + item.link}>
              <a>{item.title}</a>
            </Link>
          </div>
        </div>
      ))}
      <div className="ns-bottom">
        <Link href="/news">
          <a>{lang === "En" ? "All News" : "Все новости"}</a>
        </Link>
      </div>
      <style jsx>{`
                .ns-background {
                    width: 100%;
                    border: 1px solid #e6e6e6;
                    display: flex;
                    flex-direction: column;
                    padding:0.5rem 0 0 1rem;
                    margin-bottom:3rem;
                }
                .ns-background div {
                    width: 100%;
                    margin-right: auto;
                }
                .ns-title {
                    padding:1rem 0 0 0;
                    text-transform: uppercase;
                    color: #d92121;
                    font-size: 1rem;
                    font-weight: bold;
                    letter-spacing: 1px;
                    // font-family: 'ConquerorSansMedium';
                }
                .ns-bottom {
                    text-transform: uppercase;
                    font-weight: bold;
                    letter-spacing: 1px;
                    color: #999999;
                    text-align: right;
                    font-size: .6rem;
                    border: 0:
                    transition: all .2sdate;
                    padding:1rem;
                }
                .ns-bottom :hover {
                    color: #d92121;
                }
                .ns-preview {
                    display: flex;
                }
                .ns-date {
                    color: #999999;
                    border-bottom: 1px solid #e6e6e6;
                    padding:0;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: .7rem;
                }
                .ns-news {
                    display: block;
                    border-bottom: 1px solid #e6e6e6;
                    padding: 0;
                    font-weight: bold;
                    padding:1rem 0;
                }
                .ns-time {
                    max-width: 30%;
                    padding-top: 1.5rem;
                }
                .ns-news:hover {
                    color: #d92121;
                }
                .ns-inner {
                    padding:  1rem 0.5rem;
                }
            `}</style>
    </div>
  );
};
export default NewsStrip;
