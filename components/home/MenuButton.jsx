import Link from "next/link";
import Image from "next/dist/client/image";
import React from "react";
import Router, { useRouter } from "next/router";

const MenuButton = ({link, text, img, toggler, langToggle}) => {
    // const url = useRouter().asPath;
    const queryButton = useRouter().query;
    if (toggler) {
        queryButton.l = toggler == 'En' ? 'en' : 'ru';
    }
    return (
        <div>
            <div className="button">
                <Link href={toggler ? 
                        {query: 
                            queryButton
                        } 
                    : 
                        link} 
                >
                    {!img ? 
                        text ?
                        <div className="text">
                            <a>{text}</a>
                        </div>
                        :
                        <div className="toggler text" onClick={() => langToggle()}>
                            <a>
                                {toggler}
                            </a>
                        </div>
                    :
                        <div className="image">
                            <a>
                                <Image src={img} />
                            </a>
                        </div>
                    }
                </Link>
            </div>
            <style jsx>{`
                .button {
                    display: none;
                }
                @media (min-width:120px) {
                    .text {
                        font-family: inherit;
                        padding: 1rem 0 1rem 0;
                        font-size: 0.5rem;
                        margin: auto .75rem auto .75rem;
                        text-align: center;
                    }
                }
                @media (min-width:800px) {
                    .button {
                        display: initial;
                    }
                    .text {
                        font-family: inherit;
                        padding: 1rem 0 1rem 0  ;
                        font-size: 1rem;
                        margin: auto .75rem auto .75rem;
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
                        padding: 1rem .6rem 1rem .6rem !important;
                        margin: 0;
                        // paddin-top: .rem;
                    }
                }
                @media (min-width:802px) {
                    .toggler {
                        padding: 1rem .7rem 1rem .7rem !important;
                    }
                }
                .text:hover {
                    transition: all .2s;
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
    )
}
export default MenuButton;