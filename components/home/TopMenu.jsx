 
import Link from "next/link";
import Image from "next/dist/client/image";
import MenuButton from "./MenuButton";
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
import React, { useState } from "react";
import { useRouter } from "next/router";

const TopMenu = () => {
    const [clicked, setClick] = useState(false);
    const query = useRouter().query;
    const langToggle = () => {
        query.l = query.l == 'en' ? 'ru' : 'en';
    }
    const [menu, setMenu] = useState(false);
    const menuToggle = () => {
        setMenu(!menu)
        setClick(!clicked)
    }
    const mobSearchToggle = () => {
        setClick(!clicked)
    }
    const backToWhiteMenu = () => {
        setClick(clicked = false);
        setMenu(menu = false);
        //setSearch(search = false) /* later */
    }
    return (
        <>
            {!clicked ?
                <div className="mobileTopbar">
                        <div className="navIcon">
                            <Image src={nav} height="35px" width="36px" onClick={() => menuToggle()}/>
                        </div>
                        <div className="logoMob">
                                <Link href="/">
                                    <a>
                                        NP Russia
                                    </a>
                                </Link>
                        </div>
                        <div className="searchMob">
                                <Image src={searchMob} onClick={() => mobSearchToggle()} />
                        </div>
                </div>
            :
                <div className="mobileTopbar black">
                    <div className="navIcon">
                        <Image src={nav} height="35px" width="36px" onClick={() => menuToggle()}/>
                    </div>
                    <div className="logoMob">
                            <Link href="/">
                                <a>
                                    NP Russia
                                </a>
                            </Link>
                    </div>
                    <div className="searchMob">
                            <Image src={cross} onClick={() => backToWhiteMenu()} />
                    </div>
                </div>
            }
            {menu&&
                <div className="menu-mob">
                    <Menu langToggle={langToggle()} query={query} />
                </div>
            }
            <div className="topbar">
                <nav>
                    <div className="categories">
                        <MenuButton link="/about" text="О проекте" />
                        <MenuButton link="/donate" text="Помоги сайту" />
                        <MenuButton link="/subscribe" text="Рассылка" />
                    </div>
                    <div className="logo-box">
                        <div>
                            <Link href="/">
                                <a>
                                    <span  className="logo">NP Russia</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <span className="right-side">
                        <div className="links">
                            <MenuButton link="https://fb.com" img={fb} />
                            {query.l == 'en' ? 
                                <MenuButton toggler="Ru" langToggle={langToggle} />
                            :
                                <MenuButton toggler="En" langToggle={langToggle} />
                            }
                            <MenuButton link="https://t.me" img={telegram} />
                            <MenuButton link="https://twitter.com" img={twitter}  />
                            <MenuButton link="/feed" img={rss} />
                        </div>
                        <div className="helper">
                            <Link href="/about">
                                <a>Помоги сайту</a>
                            </Link>
                            <Image src={helper} />
                        </div>
                        <div className="searchBox">
                            <div className="search">
                                <Image src={search} />
                            </div>
                        </div>
                    </span>
                </nav>
            </div>
        <style jsx>{`
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
                    align-items:center;
                }
                .black {
                    background-color: black;
                }
                .navIcon {
                    float: left;
                    margin: auto auto auto 1rem;
                }
                .logoMob {
                    margin: auto;
                    position: absolute;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    text-shadow:
                        3px  3px 0 #000,
                        -1px -1px 0 #000,  
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000;
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
                    margin-left: -0.75 rem;
                }
                .logo {
                    text-shadow:
                        3px  3px 0 #000,
                        -1px -1px 0 #000,  
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000;
                    color: white;
                }
                .logo:hover {
                    transition: all 2s;
                    background-image: linear-gradient(to bottom, white, white, #0083D6, white, white);
                    text-shadow:
                        3px  3px 3px rgb(0, 0, 0,.1),
                        -1px -1px 3px rgb(0, 0, 0,.1),  
                        1px -1px 3px rgb(0, 0, 0,.1),
                        -1px  1px 3px rgb(0, 0, 0,.1),
                        1px  1px 3px rgb(0, 0, 0,.1);
                    background-clip: text;
                    color: transparent;
                }
                .right-side {
                    height:3em;
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
                    font-size: .62rem;
                    color: #ffffff;
                    letter-spacing: .1rem;
                    line-height: .93rem;
                    text-transform: uppercase;
                    text-align: center;
                    padding-top: 0.5rem;
                }
                .helper:hover {
                    overflow: visible;
                    padding-top: 0.9rem;
                    height: 3.4rem;
                    transition-duration: .2s;
                }
                .searchBox {
                    overflow:hidden;
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
    )
}
export default TopMenu;