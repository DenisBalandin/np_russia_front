import React from "react";
import Link from "next/link";

const MainImage = ({post}) => {
    const title = post.title;
    const description = post.description;
    const src = post.image;
    // post.by = ["Автор текста", "Text Author", "he", "she"];
    // post.imageDesc = 'Аньоло Бронзино. Аллегорический портрет Данте. 1532–1533 (деталь)';
    // post.imageRights = '© Предоставлено пресс-службой Центра Вознесенского';
    const authors = post.by ? (typeof post.by  == 'string' ? [post.by] : post.by) : '';
    const imageDesc = post.imageDesc ? post.imageDesc : '';
    const imageRights = post.imageRights ? post.imageRights : '';
    return (
        <div className="mi-background">
            <div className="mi-box">
                <h1 className="title top-text">{title}</h1>
                <p className="description top-text">{description}</p>
                <p className="authors top-text">
                    {authors &&
                        <span className="text-by">текст: </span>
                    }
                    {authors &&
                    authors.map((item, index) => 
                        <span key={index}>
                            <span className="author">
                                <Link href={"/authors/" + item}>
                                    <a>
                                        {item}
                                    </a>
                                </Link>
                            </span>
                            {index !== authors.length-1 &&
                                ', '}
                        </span>
                    )}
                </p>
                <div className="image-box">
                    <img src={src} />
                    {imageDesc &&
                        <p className="image-description">{imageDesc}</p>
                    }
                    {imageRights &&
                        <p className="image-rights">{imageRights}</p>
                    }
                </div>
            </div>
            <style jsx>{`
                @media (max-width:600px) {
                    .title {
                        font-size: 2rem !important;
                        line-height: 1.75rem !important;
                    }
                    .description {
                        line-height: 1.4rem !important;
                        font-size: 1rem !important;
                    }
                }
                p {
                    margin: 0;
                }
                .mi-background {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .mi-box {
                    margin: auto;
                    color: #1a1a1a;
                }
                .title {
                    font-size: 3rem;
                    color: #1a1a1a;
                    line-height: 2.5rem;
                    text-align: center;
                    padding-top: 2.5rem;
                    padding-bottom: .8rem;
                    margin: 0px auto;
                    font-weight: bold;
                }
                .description {
                    font-size: 1.5rem;
                    color: #1a1a1a;
                    line-height: 1.9rem;
                    text-align: center;
                    padding-top: 0px;
                    padding-bottom: 0px;
                    margin: 0px auto;
                    letter-spacing: 1px;
                    font-weight: 300;
                    font-family: 'ConquerorSans' 'ConquerorText';
                }
                .image-box {
                    // position: relative;
                    width: 66.6666vw;
                    display: flex;
                    margin: auto;
                    // justify-content: center;
                    flex-direction: column;
                    font-family: 'ConquerorSans';
                }
                .authors {
                    margin: 2rem auto;
                    text-align: center;
                    transition: all .2s;
                    font-size: .9rem;
                }
                .author {
                    font-weight: bold;
                }
                .author:hover {
                    color: #d92121;
                }
                .text-by {
                    font-family: 'ConquerorText';
                    font-style: italic !important;
                    color: #999999;
                    font-style: normal;
                }
                .image-description {
                    padding-top: .2rem !important;
                    font-weight: 400;
                }
                .image-rights {
                    padding-top: .2rem;
                    color: #999999;
                }
                @media (min-width: 350px) {
                    .top-text {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }
                @media (min-width: 800px) {
                    .mi-box {
                        max-width: 66.6666vw;
                    }
                    .image-box {
                        width: 50vw;
                    }
                    .top-text{
                        padding-left: 3rem;
                        padding-right: 3rem;
                    }
                }
                @media (min-width: 1450px) {
                    .mi-box {
                        max-width: 50vw;
                    }
                    .image-box {
                        width: 33.3333vw;
                    }
                }
            `}</style>
        </div>
    )
}
export default MainImage;