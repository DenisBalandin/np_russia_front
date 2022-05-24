"use strict";

import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [lang, setLang] = useState("En");

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

  const firstColumn = [
    {
      link: "/news",
      text: lang === "En" ? "News" : "Новости",
    },
    { link: "/about", text: lang === "En" ? "About the project" : "О проекте" },
    // { link: "/authors", text: "Авторы" },
    // { link: "/sponsors", text: "Попечители" },
    {
      link: "/donate",
      text: lang === "En" ? "Help the site " : "Помоги сайту",
    },
  ];
  const secondColumn = [
    // { link: "/partnership", text: "Партнёрство" },
    // { link: "/mailing", text: "Рассылка" },
  ];
  // const specialProjects = [
  //   { link: "/young_russia", text: "Молодая Россия" },
  //   { link: "/bridges", text: "Мосты" },
  //   { link: "/portraits", text: "Онлайн-портреты современных немецких" },
  // ];
  return (
    <footer>
      <div className="double-box">
        <div className="info-box">
          <div className="logo-box flex-item">
            <div>
              <Link href="/">
                <a>
                  <span className="logo">NP Russia</span>
                </a>
              </Link>
            </div>
            <div className="about">
              <Link href="/about">
                <a> {lang === "En" ? "About the site " : "О проекте"}</a>
              </Link>
            </div>
          </div>
          <div className="social flex-item wide">
            {firstColumn.map((item, index) =>
              index == firstColumn.length - 1 ? (
                <Link href={item.link} key={index}>
                  <a className="last">
                    <p className="soc-text">{item.text}</p>
                  </a>
                </Link>
              ) : (
                <Link href={item.link} key={index}>
                  <a>
                    <p className="soc-text">{item.text}</p>
                  </a>
                </Link>
              )
            )}
          </div>
          {/* <div className="social flex-item wide">
            {secondColumn.map((item, index) =>
              index == secondColumn.length - 1 ? (
                <Link href={item.link} key={index}>
                  <a className="last">
                    <p className="soc-text">{item.text}</p>
                  </a>
                </Link>
              ) : (
                <Link href={item.link} key={index}>
                  <a>
                    <p className="soc-text">{item.text}</p>
                  </a>
                </Link>
              )
            )}
          </div> */}
          {/* <div className="social flex-item">
            <Link href="fb.com/">
              <a>
                <Image
                  src="/images/icons/footer_soc_fb.png"
                  width="25%"
                  height="25%"
                  layout="fixed"
                  alt="views"
                />
                <p className="soc-text soc">Facebook</p>
              </a>
            </Link>
            <Link href="vk.com/">
              <a>
                <Image
                  src="/images/icons/footer_soc_vk.png"
                  width="25%"
                  height="25%"
                  layout="fixed"
                  alt="views"
                />
                <p className="soc-text soc">Вконтакте</p>
              </a>
            </Link>
            <Link href="tg.com/">
              <a>
                <Image
                  src="/images/icons/footer_soc_tg.png"
                  width="25%"
                  height="25%"
                  layout="fixed"
                  alt="views"
                />
                <p className="soc-text soc">Telegram</p>
              </a>
            </Link>
            <Link href="tw.com/">
              <a>
                <Image
                  src="/images/icons/footer_soc_tw.png"
                  width="25%"
                  height="25%"
                  layout="fixed"
                  alt="views"
                />
                <p className="soc-text soc">Twitter</p>
              </a>
            </Link>
            <Link href="/feed">
              <a className="last">
                <Image
                  src="/images/icons/footer_soc_rss.png"
                  width="25%"
                  height="25%"
                  layout="fixed"
                  alt="views"
                />
                <p className="soc-text soc">RSS</p>
              </a>
            </Link>
          </div> */}
          {/* <div className="social flex-item wide">
            <a className="special">
              <p className="soc-text">Спецпроекты NPRussia.org</p>
            </a>
            {specialProjects.map((item, index) =>
              index == specialProjects.length - 1 ? (
                <Link href={item.link} key={index}>
                  <a className="last">
                    <p className="soc-text">{item.text}</p>
                  </a>
                </Link>
              ) : (
                <Link href={item.link} key={index}>
                  <a>
                    <p className="soc-text">{item.text}</p>
                  </a>
                </Link>
              )
            )}
          </div> */}
          <div className="additional-mob flex-item">
            <p className="add-text rights">
              © 2017 NPRussia{" "}
              {lang === "En" ? "All rights reserved" : "Все права защищены"}.
            </p>
            <p className="add-text">
              {lang === "En" ? "Made with" : "Сделано при помощи"}.
              <Link href="nextjs.com/">
                <a className="white">Next.js</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="additional-info">
          <p className="add-text rights">
            © 2017 NPRussia{" "}
            {lang === "En" ? "All rights reserved" : "Все права защищены"}.
          </p>
          {/* <p className="add-text white link">
            <Link href="/legal">
              <a>Правовая информация</a>
            </Link>
          </p> */}
          <p className="add-text">
            {lang === "En" ? "Made with" : "Сделано при помощи"}
            <Link href="nextjs.com/">
              <a className="white"> Next.js</a>
            </Link>
          </p>
          <div className="right">
            <Image
              src="/images/icons/hit.gif"
              width="35%"
              height="35%"
              alt="views"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          position: relative;
          background-color: #1a1a1a;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .info-box {
          width: 100%;
          display: flex;
        }
        .logo-box {
          position: relative;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .logo {
          text-shadow: 3px 3px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff,
            -1px 1px 0 #fff, 1px 1px 0 #fff;
          color: black;
        }
        @media (min-width: 0px) {
          p {
            margin: 0;
            padding: 1rem 0 1rem 0;
          }
          .additional-mob {
            display: flex;
            justify-content: space-between;
          }
          .additional-info {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .info-box {
            flex-direction: column;
          }
          .about {
            color: white;
            margin-right: 0.5rem;
            font-size: 1rem;
          }
          .logo-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .flex-item {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #2c2c2c;
            color: white;
          }
          .social {
            gap: 1rem;
          }
          .soc-text {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .add-text {
            font-size: 0.9rem;
            color: gray;
          }
          .white {
            color: white;
          }
          .rights {
            margin-right: 1rem;
          }
          .wide {
            visibility: hidden;
            position: absolute;
            display: none;
          }
        }
        @media (min-width: 615px) {
          .info-box {
            max-width: 75rem;
            flex-direction: row;
            border-bottom: 2px solid #2c2c2c;
            margin: auto;
          }
          .additional-info {
            visibility: visible;
            position: relative;
            display: flex;
            max-width: 75rem;
            margin: auto;
          }
          .wide {
            visibility: visible;
            display: initial;
            position: relative;
          }
          .add-text {
            margin: 1rem;
          }
          footer {
            display: flex;
            justify-content: center;
          }
          .additional-mob {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .about {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .flex-item {
            flex-direction: column;
            border: 0;
          }
          .social {
            gap: 0;
          }
          .right {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: 0.5rem;
          }
          .social a {
            display: flex;
            width: 100%;
            font-size: 0.9rem;
            margin-right: auto;
            align-items: center;
            border-bottom: 2px solid #2c2c2c;
            cursor: default;
          }
          .logo-box {
            flex-direction: row;
            justify-content: start;
            align-items: start;
          }
          .soc-text {
            visibility: visible;
            display: inline;
            position: relative;
          }
          .soc {
            margin: 0 0 0 1rem;
          }
          .last {
            border: 0 !important;
          }
          .add-text {
            font-size: 0.9rem;
          }
          .soc-text:hover {
            color: #d92121;
            cursor: pointer;
            transition: all 0.2s;
          }
          .white:hover {
            color: #d92121;
            cursor: pointer;
            transition: all 0.2s;
          }
          .special {
            font-size: 0.8rem !important;
            text-transform: uppercase;
            color: #999999;
          }
        }
        @media (min-width: 79rem) {
          footer {
            // margin-top: 2rem;
          }
          .info-box {
            margin-top: 2rem;
            width: 75rem;
          }
          .logo-box {
            min-width: 20.2rem;
          }
        }
        @media (min-width: 1025px) {
          .social a {
            height: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
