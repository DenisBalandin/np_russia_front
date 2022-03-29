import Link from "next/link";
import React, { useState, useEffect } from "react";
import newsArray from "../../lib/newsArray";
import NewsService from "../../lib/services/NewsService";

const NewsStrip = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        const newsCheckResponse = async () => {
            const newsResponse = await NewsService.get();
            setNewsData(newsArray(newsResponse.reverse().slice(0,5)));
        };
        newsCheckResponse();
    }, [])
    return (
        <div className="ns-background">
            <div className="ns-title">Новости</div>
            {
            newsData.map((item, index) => 
                typeof item == 'string' ?
                    <div className="ns-inner" key={index}>
                        <div className="ns-date">
                            {item}
                        </div>
                    </div>
                :
                    <div className="ns-preview ns-inner" key={index}>
                        <div className="ns-time ns-date">
                            {item.time}
                        </div>
                        <div className="ns-news">
                            <Link href={"/news/" + item.slug}>
                                <a>
                                    {item.title}
                                </a>
                            </Link>
                        </div>
                    </div>
            )}
            <div className="ns-bottom">
                <Link href="/news">
                    <a>
                        Все новости
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .ns-background {
                    width: 100%;
                    border: 1px solid #e6e6e6;
                    border-top: 2px solid #d92121;
                    margin-bottom: 3rem;
                    display: flex;
                    flex-direction: column;
                }
                .ns-background div {
                    width: 100%;
                    padding: 1rem;
                    margin-right: auto;
                }
                .ns-title {
                    text-transform: uppercase;
                    color: #d92121;
                    font-size: 1rem;
                    font-weight: bold;
                    letter-spacing: 1px;
                    border-bottom: 1px solid #e6e6e6;
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
                    padding: .5rem !important;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: .7rem;
                }
                .ns-news {
                    display: block;
                    border-bottom: 1px solid #e6e6e6;
                    padding: .5rem 1rem !important;
                    font-weight: bold;
                }
                .ns-time {
                    max-width: 25%;
                    margin-top: .5rem;
                }
                .ns-news:hover {
                    color: #d92121;
                }
                .ns-inner {
                    padding: 0 1rem !important;
                }
            `}</style>
        </div>
    )
}
export default NewsStrip;