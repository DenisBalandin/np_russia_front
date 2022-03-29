import React, { useEffect, useState } from "react";
import NewsStrip from "./NewsStrip";
import Share from "./Share";

const Content = ({article}) => {
    let content = article;
    const [contentWidth, setContentWidth] = useState(0);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setContentWidth(window.screen.width);
        }
    }, [])
    return (
        <div className="content-background">
            <div className="content-box">
                <section className="content">
                    <div className="content-inner" dangerouslySetInnerHTML={{__html : content}} />
                    <Share />
                </section>
                <section className="sidebar">
                    <NewsStrip />
                </section>
            </div>
            <style jsx>{`
                @media (min-width: 0px) {
                    .sidebar {
                        display: none !important;
                    }
                    .content {
                        width: 100%;
                    }
                    .content-box {
                        padding: 0 1rem;
                        position: relative;
                        display: flex;
                        flex-wrap: no-wrap;
                        gap: 1rem;
                        margin-top: 3rem;
                        max-width: ${contentWidth}px;
                        overflow: hidden;
                    }
                }
                @media (min-width: 840px) {
                    .sidebar {
                        display: initial !important;
                        width: 30% !important;
                    }
                    .content {
                        width: 75%;
                    }
                }
                @media (min-width: 1030px) {
                    .content-box {
                        width: 90%;
                    }
                    .sidebar {
                        width: 27.5% !important;
                    }
                }
                @media (min-width: 1240px) {
                    .content-box {
                        width: 75rem;
                    }
                }
                @media (min-width: 1550px) {
                    .content-box {
                        // width: 66.66%;
                    }
                    .sidebar {
                        margin-left: auto !important;
                        // width: 25% !important;
                    }
                }
                @media (min-width: 1860px) {
                    .content-box {
                        // width: 50%;
                    }
                }
                .content-background {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                }
                .content-box section {
                    display: flex;
                    flex-direction: column;
                }
                .content-inner {
                    max-width: ${contentWidth}px !important;
                }
            `}</style>
        </div>
    )
}
export default Content;