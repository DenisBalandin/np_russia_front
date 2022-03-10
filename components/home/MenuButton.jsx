import Link from "next/link";
import Image from "next/dist/client/image";

const menuButton = ({link, text, img}) => {
    return (
        <div>
            <div className="button">
                <Link href={link}>
                    {!img ? 
                        <div className="text">
                            <a>{text}</a>
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
                    .text {
                        font-family: inherit;
                        padding: 1rem 0 1rem 0  ;
                        font-size: 1rem;
                        margin: auto .75rem auto .75rem;
                        text-align: center;
                    }
                }
                .text:hover {
                    transition-property: border, background-color, color;
                    transition-duration: .2s;
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
export default menuButton;