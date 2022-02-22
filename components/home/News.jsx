"use strict";

import React, { Component, useState } from "react";
import Link from "next/link"
import newsData from "/data/files/news";
import NewsPreview from "./NewsPreview";
const News = () => {
    const [newsID, setNewsID] = useState(0);
    const scrollLeft = (i) => {
        newsID ? setNewsID(newsID-i) : setNewsID(newsData.length-i);
    };
    const scrollRight = (i) => {
        newsID == newsData.length-i ? setNewsID(0) : setNewsID(newsID+i)
    }
    return (
        <div className="news-background">
            <div className="container">
                <div className="heading">
                    <div className="title">Новости</div>
                    <div className="rightSide">
                        <div className="allNews">
                            <Link href="/news"><a>все новости</a></Link>
                        </div>
                        <div className="arrows mob">
                            <div className="arrow" onClick={()=>scrollLeft(1)}>←</div>
                            <div className="arrow" onClick={()=>scrollRight(1)}>→</div>
                        </div>
                        <div className="arrows four">
                            <div className="arrow" onClick={()=>scrollLeft(4)}>←</div>
                            <div className="arrow" onClick={()=>scrollRight(4)}>→</div>
                        </div>
                        <div className="arrows five">
                            <div className="arrow" onClick={()=>scrollLeft(5)}>←</div>
                            <div className="arrow" onClick={()=>scrollRight(5)}>→</div>
                        </div>
                    </div>
                </div>
                <div className="carousel mob">
                    <div className="start">
                        <NewsPreview id={newsID}/>
                    </div>
                </div>
                <div className="carousel four">
                    <div className="news-box start">
                        <NewsPreview id={newsID}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+1}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+2}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+3}/>
                    </div>
                </div>
                <div className="carousel five">
                    <div className="news-box start">
                        <NewsPreview id={newsID}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+1}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+2}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+3}/>
                    </div>
                    <div className="news-box">
                        <NewsPreview id={newsID+4}/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 0px) {                    
                    .four {
                        visibility: hidden;
                        position: absolute;
                    }
                    .five {
                        visibility: hidden;
                        position: absolute;
                    }
                    .five div {
                        visibility: hidden;
                        position: absolute;
                    }
                    .mob {
                        visibility: visible;
                        position: relative;
                    }
                    .title {
                        margin-left: 3rem;
                    }
                    .rightSide {
                        margin-right: 3rem;
                    }
                    .allNews {
                        position: absolute;
                        visibility: hidden;
                    }
                    .container {
                        width: 100vw;
                    }
                    .carousel {
                        margin-left: 3rem;
                    }
                }
                @media (min-width: 800px) {
                    .mob {
                        position: absolute;
                        visibility: hidden;
                    }
                    .four {
                        position: relative;
                        visibility: visible;
                    }
                    .five {
                        visibility: hidden;
                        position: absolute;
                    }
                    .rightSide {
                        margin: 0;
                        transform: scaleY(1);
                        transform: scaleX(1);
                    }
                    .title {
                        margin: 0;
                    }
                    .allNews {
                        position: relative;
                        visibility: visible;
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: .6rem;
                        letter-spacing: 1px;
                    }
                    .allNews:hover {
                        color: red;
                        cursor: pointer;
                    }
                    .container {
                        width: 90%;
                    }
                    .carousel {
                        margin: 0;
                    }
                }
                @media (min-width: 1400px) {
                    .four {
                        position: absolute;
                        visibility: hidden;
                    }
                    .five {
                        position: relative;
                        visibility: visible;
                    }
                    .five div {
                        position: relative;
                        visibility: visible;
                    }
                    .container {
                        width: 75%;
                    }
                }
                .container {
                    margin: auto;
                }
                .carousel {
                    display: flex;
                    justify-content: space-between;
                }
                .title {
                    color: #d92121;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    font-weight: bold;
                    letter-spacing: 1px;
                }
                .news-background {
                    padding: 1rem 0 1rem 0;
                    height: auto;
                    width: 100%;
                    min-height: 11rem;
                    border-bottom: 1px solid #e6e6e6;
                    background-color: #f2f2f2;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                }
                .news-box {
                    padding-left: 3rem; 
                    border-left: 1px solid lightgray;
                }
                .start {
                    border: none;
                    padding: 0;
                }
                .arrows {
                    display: flex;
                    gap: .5rem;
                    font-size: 1.5rem;
                    font-style: monospace;
                }
                .arrow {
                    display: flex;
                    border: .15rem solid grey;
                    padding-bottom: .19rem;
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
                .heading {
                    display: flex;
                    justify-content: center;
                    height: 10%;
                }
                .rightSide {
                    display: flex;
                    visibility: visible;
                    align-items: center;
                    gap: 1rem;
                    margin-left: auto;
                }
            `}</style>
        </div>
    )
}



export default News;
