import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import React from "react";
import Router, { useRouter } from "next/router";

const LangMenuButton = () => {
  const [lang, setLang] = useState("ENG");
  const router = useRouter();

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

  const chnageLang = () => {
    if (lang === "ENG") {
      setLang("RUS");
    } else {
      setLang("ENG");
    }
    router.reload(window.location.pathname);
  };
  return (
    <div>
      <div className="button">
        <div className="button" onClick={() => chnageLang()}>
          <div className="text">{lang}</div>
        </div>
      </div>
      <style jsx>{`
        .button {
          display: none;
        }
        @media (min-width: 120px) {
          .text {
            font-family: inherit;
            padding: 1rem 0 1rem 0;
            font-size: 0.5rem;
            margin: auto 0.75rem auto 0.75rem;
            text-align: center;
          }
        }
        @media (min-width: 800px) {
          .button {
            display: initial;
          }
          .text {
            font-family: inherit;
            padding: 1rem 0 1rem 0;
            font-size: 1rem;
            margin: auto 0.75rem auto 0.75rem;
            text-align: center;
          }
          .toggler {
            color: #999999;
            font-weight: 600;
            font-size: 1.5rem;
            border-left: 1px solid #e6e6e6;
            border-right: 1px solid #e6e6e6;
            display: flex;
            align-items: center;
            line-height: 1rem;
            padding: 1rem 0.6rem 1rem 0.6rem !important;
            margin: 0;
            // paddin-top: .rem;
          }
        }
        @media (min-width: 802px) {
          .toggler {
            padding: 1rem 0.7rem 1rem 0.7rem !important;
          }
        }
        .text:hover {
          transition: all 0.2s;
          color: #d92121;
          cursor: pointer;
        }
        .image {
          display: block;
          width: 100%;
          height: 50%;
          min-height: 3em;
          overflow: hidden;
        }
        .image:hover {
          margin-top: -100%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default LangMenuButton;
