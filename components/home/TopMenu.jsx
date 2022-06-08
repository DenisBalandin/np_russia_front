import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/dist/client/image";
import MenuButton from "./MenuButton";
import LangMenuButton from "./LangMenuButton";
import Menu from "/components/home/Menu.jsx";
import fb from "/data/files/images/fb.png";
import telegram from "/data/files/images/telegram.png";
import twitter from "/data/files/images/twitter.png";
import rss from "/data/files/images/rss.png";
import helper from "/data/files/images/helper-bottom.png";
import search from "/data/files/images/search.png";
import nav from "/data/files/images/nav.png";
import searchMob from "/data/files/images/searchMob.png";
import cross from "/data/files/images/header_close.png";

const TopMenu = () => {
  const [clicked, setClick] = useState(false);
  const [lang, setLang] = useState("En");

  useLayoutEffect(() => {
    if (sessionStorage.getItem("state")) {
      setLang(sessionStorage.getItem("state"));
    } else {
      sessionStorage.setItem("state", lang);
    }
  }, []);

  const query = useRouter().query;
  const langToggle = () => {
    query.l = query.l == "en" ? "ru" : "en";
  };
  const [menu, setMenu] = useState(false);
  const menuToggle = () => {
    setMenu(!menu);
    setClick(!clicked);
  };
  const mobSearchToggle = () => {
    setClick(!clicked);
  };
  const backToWhiteMenu = () => {
    setClick((clicked = false));
    setMenu((menu = false));
  };
  useEffect(() => {
    sessionStorage.setItem("state", lang);
  }, [lang]);

  return (
    <>
      {!clicked ? (
        <div className="mobileTopbar">
          <div className="navIcon">
            <Image
              src={nav}
              height="35px"
              width="36px"
              onClick={() => menuToggle()}
              alt=""
            />
          </div>
          {/* <div className="logoMob">
            <Link href="/">
              <a>NP Russia</a>
            </Link>
          </div> */}
          <div className="searchMob">
            <Image src={searchMob} onClick={() => mobSearchToggle()} alt="" />
          </div>
        </div>
      ) : (
        <div className="mobileTopbar black">
          <div className="navIcon">
            <Image
              src={nav}
              height="35px"
              width="36px"
              onClick={() => menuToggle()}
              alt=""
            />
          </div>
          <div className="logoMob">
            <Link href="/">
              <a>NP Russia</a>
            </Link>
          </div>
          <div className="searchMob">
            <Link href="/search">
              <a>
                <Image src={cross} onClick={() => backToWhiteMenu()} alt="" />
              </a>
            </Link>
          </div>
        </div>
      )}
      {menu && (
        <div className="menu-mob">
          <Menu langToggle={langToggle()} query={query} />
        </div>
      )}
      <div className="topbar">
        <nav>
          <div className="categories">
            {/* <Link href="/about">
              <a>
                <div className="pic">О проекте</div>
              </a>
            </Link> */}
            <MenuButton
              link="/about"
              text={lang === "En" ? "About" : "О Проекте"}
            />
            <MenuButton
              link="/donate"
              text={lang === "En" ? "Donate" : "Помоги сайту"}
            />
            <MenuButton
              link="/support-for-ukraine"
              text={lang === "En" ? "Support for Ukraine" : "Помощь Украине"}
            />
            {/* <MenuButton link="/subscribe" text="Рассылка" /> */}
          </div>
          <div className="logo-box">
            <div>
              <Link href="/">
                <a>
                  <span className="logo">NP Russia</span>
                </a>
              </Link>
            </div>
          </div>
          <span className="right-side">
            <div className="links">
              {/* <MenuButton link="https://fb.com" img={fb} /> */}
              {/* {query.l == "en" ? (
                <MenuButton toggler="Ru" langToggle={langToggle} />
              ) : (
                <MenuButton toggler="En" langToggle={langToggle} />
              )} */}
              <LangMenuButton />
              <MenuButton link="https://t.me/NP_Russia" img={telegram} />
              {/*  <MenuButton link="https://twitter.com" img={twitter} />
              <MenuButton link="/feed" img={rss} /> */}
            </div>
            <div className="helper">
              <Link href="/donate">
                <a>{lang === "En" ? "Help the site" : "Помоги сайту"}</a>
              </Link>
              <Image src={helper} alt="" />
            </div>
            <div className="searchBox">
              <div className="search">
                <Link href="/search">
                  <a>
                    <Image src={search} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </span>
        </nav>
      </div>
      <Link href="/support-for-ukraine">
        <a>
          <div className="ukraine-help-background">
            <div className="ukraine-help-top-background"></div>
            <div className="ukraine-text">
              {lang === "En" ? "No War In Ukraine" : "Нет войне в Украине"}
            </div>
            <div className="ukraine-help-down-background"></div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .ukraine-text {
          color: #e3edf7;
          font-size: 2rem;
          width: 24rem;
          text-align: center;
          margin: -1.4rem auto -1rem auto;
          font-weight: bold;
        }
        .ukraine-help-top-background {
          background-color: #0057b7;
          height: 2.5rem;
        }
        .ukraine-help-down-background {
          background-color: #ffd700;
          height: 2.5rem;
        }
        @media (min-width: 0px) {
          .topbar {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .mobileTopbar {
            position: relative;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .black {
            background-color: black;
          }
          .navIcon {
            float: left;
            margin: auto auto auto 1rem;
            cursor: pointer;
          }
          .logoMob {
            margin: auto;
            position: absolute;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
              -1px 1px 0 #000, 1px 1px 0 #000;
            padding-bottom: 1px;
          }
          .searchMob {
            margin-right: 0.8rem;
          }
        }
        @media (min-width: 800px) {
          .mobileTopbar {
            visibility: hidden;
            height: 0;
          }
          .menu-mob {
            display: none;
          }
          .topbar {
            visibility: visible;
            z-index: 3;
            display: flex;
            position: relative;
            background-color: #ffffff;
            min-height: 3rem;
            align-items: center;
            justify-content: center;
          }
          nav {
            min-width: 100%;
            position: absolute;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .categories {
            display: flex;
            font-weight: bold;
            float: left;
          }
          .logo-box {
            position: relative;
            font-size: 1.5rem;
            font-weight: bold;
            margin: auto;
            padding: 0 8rem 0 0;
          }
          .logo {
            text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
              -1px 1px 0 #000, 1px 1px 0 #000;
            color: white;
          }
          .logo:hover {
            transition: all 2s;
            background-image: linear-gradient(
              to bottom,
              white,
              white,
              #0083d6,
              white,
              white
            );
            text-shadow: 3px 3px 3px rgb(0, 0, 0, 0.1),
              -1px -1px 3px rgb(0, 0, 0, 0.1), 1px -1px 3px rgb(0, 0, 0, 0.1),
              -1px 1px 3px rgb(0, 0, 0, 0.1), 1px 1px 3px rgb(0, 0, 0, 0.1);
            background-clip: text;
            color: transparent;
          }
          .right-side {
            height: 3em;
            display: flex;
            position: relative;
          }
          .links {
            display: flex;
            height: 3rem;
            overflow: hidden;
          }
          .helper {
            position: relative;
            font-weight: bold;
            height: 3rem;
            width: 4rem;
            border-top: 3px solid #c31e1e;
            background-color: #d92121;
            font-size: 0.62rem;
            color: #ffffff;
            letter-spacing: 0.1rem;
            line-height: 0.93rem;
            text-transform: uppercase;
            text-align: center;
            padding-top: 0.5rem;
          }
          .helper:hover {
            overflow: visible;
            padding-top: 0.9rem;
            height: 3.4rem;
            transition-duration: 0.2s;
          }
          .searchBox {
            overflow: hidden;
            padding-right: 0px;
          }
          .search:hover {
            margin-top: -100%;
            cursor: pointer;
          }
        }
        @media (min-width: 1400px) {
          nav {
            min-width: 75%;
          }
        }
        @media (min-width: 2000px) {
          nav {
            min-width: 60%;
          }
        }
      `}</style>
    </>
  );
};
export default TopMenu;
