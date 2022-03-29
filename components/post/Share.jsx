import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const Share = () => {
    return (
        <div className='share-background'>
            <p className='share-text'>Поделиться ссылкой / Share</p>
            <div className='share-soc'>
                <Link href="fb.com/">
                    <a>
                        <div className='share-fb'>
                            <div className='share-img'>
                                <Image src="/images/icons/s_fb.png" height="60%" width="30%" />
                            </div>
                            <p>Facebook</p>
                        </div>
                    </a>
                </Link>
                <Link href="twitter.com/">
                    <a>
                        <div className='share-tw'>
                            <div className='share-img'>
                                <Image src="/images/icons/s_tw.png" height="60%" width="30%" />
                            </div>
                            <p>Twitter</p>
                        </div>
                    </a>
                </Link>
                <Link href="tg.me/">
                    <a>
                        <div className='share-tg'>
                            <div className='tg'>
                                <span className='tg-inner'>
                                    <Image src="/images/icons/tg.png" height="17%" width="17%" />
                                </span>
                            </div>
                            <p>Telegram</p>
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                a {
                    overflow: hidden;
                    height: 2rem;
                }
                .share-background {
                    display: flex;
                    width: 100%;
                    position: relative;
                    flex-direction: column;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    text-align: center;
                    font-size: .6rem;
                    justify-content: center;
                    margin: 1rem 0;
                }
                .share-text {
                    margin-bottom: 1rem;
                }
                .share-fb {
                    color: #3b5998;
                }
                .share-fb:hover {
                    background: #3b5998;
                    color: white;
                }
                .share-tw {
                    color: #00acee;
                }
                .share-tw:hover {
                    background: #00acee;
                    color: white;
                }
                .share-tg {
                    color: #28a8e9;
                }
                .share-tg:hover {
                    background: #28a8e9;
                    color: white;
                }
                .tg {
                    position: relative;
                    border: 0 !important;
                    border-right: 1px solid #e6e6e6 !important;
                    margin: 0 !important;
                    margin-bottom: -3px !important;
                    background-color: white !important;
                }
                .tg-inner {
                    margin: .4rem;
                }
                .share-tg p {
                    margin-bottom: 7.5% !important;
                }
                .share-soc {
                    display: flex;
                    justify-content: space-evenly;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .share-soc div {
                    padding: .7rem;
                    display: flex;
                    overflow: hidden;
                    margin-bottom: 3rem;
                    padding: 0 !important;
                    border: 1px solid #e6e6e6;
                }
                .share-soc div p {
                    margin: auto;
                    padding: 0 1rem;
                }
                .share-img {
                    position: relative;
                    margin: -2rem 0 0 0 !important;
                    border: 0 !important;
                    border-right: 1px solid #e6e6e6 !important;
                }
            `}</style>
        </div>
    )
}
export default Share;