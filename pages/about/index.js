import React, { useState, useEffect } from "react";
import BlogService from "../../lib/services/BlogService";
import { useRouter } from "next/router";
import TopMenu from "../../components/home/TopMenu";
import Menu from "../../components/home/Menu";
import TopCategory from "../../components/post/TopCategory";
import MainImage from "../../components/post/MainImage";
import Content from "../../components/post/Content";
import Footer from "../../components/home/Footer";
import MostRead from "../../components/home/MostRead";
import Share from "../../components/post/Share";
import NewsStrip from "../../components/post/NewsStrip";

const About = () => {
  const [postData, setPostData] = useState([]);

  return (
    <div>
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      {/* <MainImage post={postData} /> */}
      <div className="content-background">
        <div className="content-box">
          <section className="content">
            <div className="content-inner">
              <div id="left">
                <p>Что такое NP Russia?</p>
                <p>Друзья!</p>

                <p>
                  Уже 6 лет сайт NP Russia работает, вызывает споры, интересует.
                  Все это происходит исключительно благодаря вам!
                </p>

                <p>
                  Потому что COLTA.RU (бывший{" "}
                  {/* <a href="https://nprussia.net/" target="blank">
                    OpenSpace.ru
                  </a> */}
                  ) — единственное в России большое общественное СМИ, которое
                  существует за счет трех источников:{" "}
                </p>

                <p>
                  У сайта NP Russia нет хозяина — ни государственного, ни
                  частного. Это совершенно независимое, свободное СМИ о культуре
                  и обществе.
                </p>

                <p>
                  Благодаря вам мы смогли собрать необходимое для существования
                  сайта финансирование, начиная с 2016 года. Спасибо вам за веру
                  в нас и поддержку!
                </p>

                <p>
                  На календаре 2021-й — и нам по-прежнему нужна ваша помощь.
                </p>

                <h6>Как нам помочь?</h6>

                <p>
                  Вы можете сделать это на странице{" "}
                  {/* <a href="/donate">Помоги нашему сайту</a>.{" "} */}
                </p>

                <p>
                  Будет достаточно перевести нам любую сумму (разово или оформив
                  ежемесячную подписку) — безвозмездно в поддержку сайта.
                </p>

                <p>Еще раз спасибо! Мы тоже вас любим! </p>

                <h6>Подписывайтесь на наши обновления</h6>

                <p>Не пропустите самое интересное!</p>

                <h6>Пишите нам</h6>

                <p>
                  <em>
                    Мнения авторов материалов сайта не всегда совпадают с
                    позицией редакции.
                  </em>
                </p>

                <p>
                  <em>
                    Редакция не несет ответственности за достоверность
                    информации, содержащейся в рекламных объявлениях. Редакция
                    не предоставляет справочной информации.
                  </em>
                </p>

                <p>
                  <em>
                    Редакция не несет ответственности за комментарии,
                    оставленные читателями сайта, где бы они ни были
                    опубликованы. Всю ответственность за комментарии,
                    размещенные в сети Интернет, несут их авторы. Редакция
                    оставляет за собой право не модерировать комментарии в
                    случае их публикации на сайте или в аккаунтах социальных
                    сетей, зарегистрированных на COLTA.RU.
                  </em>
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>
            <Share />
          </section>
          <section className="sidebar">
            <NewsStrip />
          </section>
        </div>
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
          font-size: min(1.3rem);
          line-height: min(2rem);
          font-weight: 200;
        }
      `}</style>
    </div>
  );
};
export default About;
