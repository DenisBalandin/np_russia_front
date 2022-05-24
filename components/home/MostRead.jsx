import { useState, useEffect, useLayoutEffect } from "react";
import MostReadPost from "./MostReadPost";
import BlogService from "../../lib/services/BlogService";
const MostRead = ({ newest }) => {
  const [mrData, setMrData] = useState([]);
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const mrCheckResponse = async () => {
      const mrResponse = await BlogService.get();
      setMrData(mrResponse);
    };
    mrCheckResponse();
  }, []);
  const [count, setCount] = useState(0);
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
  const arr = newest
    ? mrData
        ?.slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .reverse()
        .slice(0, 20)
    : mrData
        ?.slice()
        .sort((a, b) => a.views - b.views)
        .reverse()
        .slice(0, 20);
  return (
    <div className="mr-background">
      <div className="mr-carousel">
        <div className="mr-top">
          <div className="title">
            {lang === "En" ? "The most readable" : "Самое читаемое"}
          </div>
          <div className="arrows">
            <div className="arrow" onClick={() => setCount(count - 1)}>
              ←
            </div>
            <div className="arrow" onClick={() => setCount(count + 1)}>
              →
            </div>
          </div>
        </div>
        <div className="mr-bottom">
          {arr?.map((item, id) => (
            <div key={item.id}>
              <MostReadPost id={id + count} arr={arr} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mr-background {
          justify-content: center;
          background-color: #f2f2f2;
          position: absolute;
          width: 100%;
          left: 0;
        }
        .mr-carousel {
          max-width: 75rem;
          margin: 0 auto;
        }
        .mr-top {
          display: flex;
          border-top: 5px solid #d92121;
          margin: auto;
          padding-top: 1rem;
        }
        .mr-bottom {
          display: flex;
          justify-content: left;
          overflow: hidden;
          margin-top: 0.5rem;
        }
        .title {
          overflow: hidden;
          margin: 0 auto 0 1rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #d92121;
          font-weight: bold;
          font-size: 1.5rem;
        }
        .arrows {
          display: flex;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-style: monospace;
        }
        .arrow {
          display: flex;
          border: 0.15rem solid grey;
          padding-bottom: 0.19rem;
          justify-content: center;
          align-items: center;
          border-radius: 99999px;
          height: 2rem;
          width: 2rem;
        }
        .arrow:hover {
          color: red;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MostRead;
