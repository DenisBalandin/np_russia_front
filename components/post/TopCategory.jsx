import views from "/public/images/views.png";
import Image from "next/image";
import dateProcessor from "../../lib/dateProcessor";
import Link from "next/link";
import React from "react";

const TopCategory = ({category, viewCount, date}) => {
    date = dateProcessor(date);
    return (
        <div className="cat-background">
            <div className="cat-box">
                <div className="category">
                    <Link href={"/" + category}> 
                    {/* ^to be changed*/}
                        <a>
                            <div className="red-area">
                                {category}
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="date">
                    {date}
                </div>
                <div className="views">
                    <div className="image">
                        <Image src={views} />
                    </div>
                    <div className="views-count">{viewCount}</div>
                </div>
            </div>
            <style jsx>{`
                .cat-backgorund {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                }
                .cat-box {
                    flex-wrap: wrap;
                    display: flex;
                    justify-content: center;
                    margin: auto;
                }
                .red-area {
                    background-color: #d92121;
                    transition: all .2s;
                    padding: 1rem 3rem 1rem 3rem;
                    display: flex;
                    flex-wrap: wrap;
                }
                .category {
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-size: .8rem;
                    color: white;
                    width: 100%;
                    min-height: 3rem;
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    justify-content: center;
                    font-weight: bold;
                }
                .red-area:hover {
                    background-color: #999999;
                    cursor: pointer;
                }
                .date {
                    display: flex;
                    color: #999999;
                    letter-spacing: 1px;
                    max-width: 10rem;
                    align-items: center;
                    font-size: .7rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    padding: 1rem;
                }
                .image {
                    max-height: .9rem;
                    margin-top: .2rem;
                    overflow: hidden;
                }
                .views {
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    font-size: .7rem;
                    max-width: 10rem;
                    color: #999999;
                    font-weight: bold;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .views-count {
                    margin-left: .4rem;
                }
                @media (min-width: 410px) {
                    .red-area {
                        padding: 1rem 6rem 1rem 6rem;
                        font-size: .9rem;
                    }
                }
                @media (min-width:800px) {
                    .red-area {
                        padding: 1rem;
                    }
                    .category {
                        order: 1;
                        width: auto;
                    }
                    .views {
                        order: 2;
                    }
                    .cat-box {
                        min-height: 3rem;
                        align-items: center;
                    }
                }
            `}</style>
        </div>
    )
}
export default TopCategory;