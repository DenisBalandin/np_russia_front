"use strict";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Menu = (langToggle, query) => {
  const [visibility, setVisibility] = useState("hidden");
  const [position, setPosition] = useState("absolute");
  useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        setVisibility(
          document.getElementsByClassName("Menu")[0].getBoundingClientRect().top
            ? "hidden"
            : "visible"
        );
        setPosition(
          document.getElementsByClassName("Menu")[0].getBoundingClientRect().top
            ? "absolute"
            : "relative"
        );
      }
    }, 100)
  }, []);
  return (
    <>
      <div className="menu-background">
        <div className="menu">
          <ul>
            <li className="logo-box">
              <div>
                <Link href="/">
                  <a>
                    <span className="logo">NP Russia</span>
                  </a>
                </Link>
              </div>
            </li>
            <li>Кино</li>
            <li>Искусство</li>
            <li>Современная музыка</li>
            <li>Академическая музыка</li>
            <li>ЛитератураТеатр</li>
            <li>Медиа</li>
            <li>Общество</li>
            <li>Наука</li>
            <li>Colta Specials</li>
            {query.l === 'en' ?
              <li className="lang">
                <Link href={{query: query}} onClick={() => langToggle()} >
                  <a>
                    Русский
                  </a>
                </Link>
              </li>
            :
              <li className="lang">
                <Link href={{query: query}} onClick={() => langToggle()} >
                  <a>
                    English
                  </a>
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 0px) {
          .menu {
            position: absolute;
            z-index: 3;
            width: 100%;
            display: flex;
            flex-direction: column;
            background-color: black;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0;
          }
          ul {
            margin: 0;
            padding-left: 0;
            border-top: 1px solid grey;
            border-bottom: 1px solid grey;
          }
          .menu li {
            list-style-type: none;
            line-height: 4rem;
            border: 1px solid grey;
            padding-left: 1rem;
          }
          .logo-box {
            position: absolute;
            visibility: hidden;
          }
          .logo {
            text-shadow:
                3px  3px 0 #fff,
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px  1px 0 #fff,
                1px  1px 0 #fff;
            color: black;
          }
        }
        @media (min-width: 800px) {
          .lang {
            display: none;
            position: absolute;
          }
          .logo-box {
            position: ${position};
            visibility: ${visibility};
          }
          .menu-background {
            min-height: 3rem;
          }
          ul {
            border: none;
          }
          .menu {
            margin: 0 auto 0 auto;
            position: relative;
            color: #ffffff;
            background: black;
            list-style: none;
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
          }
          .menu li {
            padding: 0;
            float: left;
            border: none;
            margin: 1rem;
            line-height: 1rem;
            font-size: 1rem;
            cursor: pointer;
            list-style-type: none;
          }
          .menu li:hover {
            color: #cccccc;
          }
        }
        @media (min-width: 1450px) {
          .logo-box {
            position: absolute;
            left: 1rem;
          }
          .logo {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
