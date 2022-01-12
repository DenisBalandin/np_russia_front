"use strict";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sliderData from "/data/files/slider-images.js";
import arrows from "/data/files/images/banner-arrows.png";
let descriptionBar = 0;

const Slider = () => {
    const [selectedPic, setSelectedPic] = useState(0);
    const leftImageSrc = selectedPic?sliderData[selectedPic-1].url:sliderData[sliderData.length-1].url;
    const mainImageSrc = sliderData[selectedPic].url;
    const rightImageSrc = (selectedPic === sliderData.length-1)?sliderData[0].url:sliderData[selectedPic+1].url;
    const mainSlideData = {title: sliderData[selectedPic].title, description: sliderData[selectedPic].description};
    const height = '1000vw';
    const width = '1000vw';
    
    return (
        <>
            <div className="slider-background">
                <div className="left slide">
                    <Image
                        priority
                        src={leftImageSrc}
                        height={height}
                        width={width}
                        objectFit="cover"
                    />
                    <div className="shader">
                        <div className="arrowBox">
                            <div className="leftArrow arrow" onClick={() => selectedPic?setSelectedPic(selectedPic-1):setSelectedPic(selectedPic = sliderData.length-1)}>
                                <Image src={arrows} objectFit="fill"/>
                            </div>
                        </div>
                        <div className="actualShader" />
                    </div>
                </div>
                <div className="mainSlide">
                    <div className="mobArrows">

                        <div className="arrowBox left mob">
                            <div className="leftArrow arrow" onClick={() => selectedPic?setSelectedPic(selectedPic-1):setSelectedPic(selectedPic = sliderData.length-1)}>
                                <Image src={arrows} objectFit="fill"/>
                            </div>
                        </div>

                        <div className="arrowBox right mob">
                            <div className="rightArrow arrow" onClick={() => (selectedPic===sliderData.length-1)?setSelectedPic(selectedPic = 0):setSelectedPic(selectedPic+1)}>
                                <Image src={arrows} objectFit="fill"/>
                            </div>
                        </div>
                    </div>
                    <Image           
                        priority
                        src={mainImageSrc}
                        height="1000vw"
                        width={width}
                        objectFit="contain"
                    />
                    <div className="mainSlideShader">
                        <div className="text">
                            <p className="title">{mainSlideData.title}</p>
                            <p className="description">{mainSlideData.description}</p>
                        </div>
                    </div>
                </div>
                <div className="right slide">
                    <Image
                            priority
                            src={rightImageSrc}
                            height={height}
                            width={width}
                            objectFit="cover"
                    />
                    <div className="shader">
                        <div className="arrowBox">
                            <div className="rightArrow arrow" onClick={() => (selectedPic===sliderData.length-1)?setSelectedPic(selectedPic = 0):setSelectedPic(selectedPic+1)}>
                                <Image src={arrows} objectFit="fill"/>
                            </div>
                        </div>
                        <div className="actualShader" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 0px){
                    .slide {
                        visibility : hidden;
                        width: 0;
                    }
                    .mainSlide {
                        width: 100%;
                        max-height: 400px;
                    }
                    .mainSlideShader {
                        width: 100%;
                    }
                    .mobArrows{
                        position: absolute;
                        width: 100%;
                        display: flex;
                        height: 100%;
                        align-items: center;
                    }
                    .arrowBox {
                        height: 100%;
                        position: relative;
                    }
                    .right {
                        right: 0;
                    }
                    .mob {
                        background-color: black;
                        opacity: 50%;
                    }
                }
                @media (min-width: 800px) {
                    .mobArrows {
                        visibility: hidden;
                        height: 0;
                    }
                    .slide {
                        visibility: visible;
                        width: 33.3333vw;
                        height: inherit;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }
                    .mainSlide {
                        width : 33.3333vw;
                        max-height: none;
                    }
                    .mainSlideShader {
                        width : 33.3333vw;
                    }
                }
                .left {
                    float: left;
                }
                .right {
                    margin-left: auto;
                }
                .slider-background{ 
                    display: flex; 
                    position: relative; 
                    width: 100%;
                    overflow: hidden;
                    max-height: 20rem;
                    height: 100%;
                }
                .mainSlide {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 5px solid red;
                    overflow: hidden;
                }
                .shader {
                    top:0;
                    position: absolute;
                    width: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 5px solid grey;
                    height: inherit;
                }
                .actualShader {
                    width: inherit;
                    position: absolute;
                    height: inherit;
                    background-color: black;
                    opacity: 80%;
                }
                .arrowBox {
                    position: relative;
                    z-index:2;
                    height: 70px;
                    width: 70px;
                    overflow: hidden;
                    border-radius: 9999px;
                }
                .leftArrow {
                    width: 200%;
                    height: 300%;
                }
                .rightArrow {
                    width: 200%;
                    height: 300%;
                    transition-property: all .2s;
                    margin-left: -100%;
                }
                .arrow:hover {
                    margin-top: -100%;
                    cursor: pointer;
                }
                .mainSlideShader {
                    position: absolute;
                    bottom: 0px;
                    display: block;
                    font-family: 'ConquerorText';
                    line-height: 30px;
                    text-align: center;
                    cursor: pointer;
                    height: auto;
                    max-height: 100px;
                    transition: all 1s;
                    background: rgba(0, 0, 0, 0.6);
                }
                .mainSlideShader:hover {
                    max-height: 500px;
                }
                .text {
                    z-index:2;
                    color: white;
                }
                .title {
                    font-size: 30px;
                    font-weight: bold;
                }
                .description {
                    position: absolute;
                    font-size: 1.5rem;
                    color: lightgrey;
                    overflow: hidden;
                    transition: all 2s linear;
                    text-shadow:
                        3px  3px 0 #000,
                        -1px -1px 0 #000,  
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000;
                }
            `}</style>
            <div dangerouslySetInnerHTML={{
       
                __html: `
                    <script>
                        if (typeof window !== undefined) {
                            let shaderDiv = document.getElementsByClassName('mainSlideShader')[0];
                            let descDiv;
                            let temp;
                            let counter = 0;
                            let interval;
                            shaderDiv.addEventListener('mouseenter', () => {
                                descDiv = document.getElementsByClassName('description')[0];
                                temp = descDiv.innerHTML;
                                descDiv.innerHTML = '';
                                interval = setInterval(() => {
                                    if (counter < temp.length) {
                                        descDiv.innerHTML += temp[counter];
                                        counter++;
                                    }
                                }, 10)
                                descDiv.style.visibility = 'visible';
                                descDiv.style.position = 'relative';
                                shaderDiv.style.maxHeight = '';
                            });
                            shaderDiv.addEventListener('mouseleave', () => {
                                clearInterval(interval);
                                descDiv.innerHTML = temp;
                                counter = 0;
                                descDiv.style.position = 'absolute';
                                shaderDiv.style.maxHeight = '100px';
                                descDiv.style.visibility = 'hidden';
                            });
                        }
                    </script>`
            }}/>
        </>
    );
}
export default Slider;