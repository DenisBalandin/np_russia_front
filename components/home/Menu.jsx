"use strict";

import React, { Component } from "react";




const Menu = () => {
    return (
        <>
            <div className="menu-background">
                <div className="menu"><ul>
                    <li>Кино</li>
                    <li>Искусство</li>
                    <li>Современная музыка</li>
                    <li>Академическая музыка</li>
                    <li>ЛитератураТеатр</li>
                    <li>Медиа</li>
                    <li>Общество</li>
                    <li>Наука</li>
                    <li>Colta Specials</li></ul>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 0px){
                    .menu {
                        position: absolute;
                        z-index:3;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        background-color: black;
                        color: white;
                        font-size: 1.5rem;
                        font-weight: bold;
                        margin: 0;
                    }
                    ul {
                        margin: 0;
                        padding-left: 0;
                        border-top: 1px solid grey;
                        border-bottom: 1px solid grey;
                    }
                    .menu li {
                        list-style-type: none;
                        line-height: 4rem;
                        border: 1px solid grey;
                        padding-left: 2rem;
                    }
                }
                @media (min-width: 800px) {
                    .menu-background{
                        position: relative;
                        flex-direction: row;
                        z-index:2;
                        min-height: 3rem;
                        background: black;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    ul {
                        border: none;
                    }
                    .menu {
                        margin: 0 auto 0 auto;
                        color: #ffffff;
                        list-style: none;
                        align-items: center;
                    }
                    .menu li{
                        float:left;
                        border: none;
                        margin: 1rem;
                        line-height: 1rem;
                        font-size: 1rem;
                        cursor: pointer;
                        list-style-type: none;
                    }
                    .menu li:hover{
                        color:#cccccc;
                    }
                }                
            `}</style>
        </>
    );

}

export default Menu;