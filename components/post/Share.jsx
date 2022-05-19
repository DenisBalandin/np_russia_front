import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
const Share = ({ link, title }) => {
  return (
    <div className="share-background">
      <p className="share-text">Поделиться ссылкой / Share</p>
      <div className="share-soc">
        <div className="share-fb">
          <FacebookShareButton
            url={`https://www.nprussia.net/post/${link}`}
            quote={title}
            hashtag={"#RussianWarCrimes"}
          >
            <FacebookIcon size={32} round />
            <p>Facebook</p>
          </FacebookShareButton>
        </div>

        <div className="share-tw">
          <div className="tg">
            <TwitterShareButton
              url={`https://www.nprussia.net/post/${link}`}
              title={title}
            >
              <TwitterIcon size={32} round />
              <p>Twitter</p>
            </TwitterShareButton>
          </div>
        </div>

        <div className="share-tg">
          <div className="tg">
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={title}
            >
              <TelegramIcon size={32} round />
              <p>Telegram</p>
            </TelegramShareButton>
          </div>
        </div>
      </div>
      <style jsx>{`
        a {
          overflow: hidden;
          height: 2rem;
        }
        .share-background {
          display: flex;
          width: 100%;
          flex-direction: column;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
          font-size: 0.6rem;
          justify-content: center;
          margin: 0.5rem 0;
          bottom: 0; /* добавили */
        }
        .share-text {
          margin-bottom: 1rem;
        }
        .share-fb {
          color: #3b5998;
        }
        .share-fb:hover {
          background: #3b5998;
          color: white;
        }
        .share-tw {
          color: #00acee;
        }
        .share-tw:hover {
          background: #00acee;
          color: white;
        }
        .share-tg {
          color: #28a8e9;
        }
        .share-tg:hover {
          background: #28a8e9;
          color: white;
        }
        .tg {
          position: relative;
          border: 0 !important;
          border-right: 1px solid #e6e6e6 !important;
          margin: 0 !important;
          margin-bottom: -3px !important;
          background-color: white !important;
        }
        .tg-inner {
          margin: 0.4rem;
        }
        .share-tg p {
          margin-bottom: 7.5% !important;
        }
        .share-soc {
          display: flex;
          justify-content: space-evenly;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .share-soc div {
          padding: 0.7rem;
          display: flex;
          overflow: hidden;
          margin-bottom: 3rem;
          padding: 0 !important;
          border: 1px solid #e6e6e6;
        }
        .share-soc div p {
          margin: auto;
          padding: 0 1rem;
        }
        .share-img {
          position: relative;
          margin: -2rem 0 0 0 !important;
          border: 0 !important;
          border-right: 1px solid #e6e6e6 !important;
        }
      `}</style>
    </div>
  );
};
export default Share;
