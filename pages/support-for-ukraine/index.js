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

const SupportForUkraine = () => {
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
                <h1>Как помочь людям в Украине </h1>
                <p>
                  Российское вторжение в Украину вызвало возмущение и осуждение
                  со стороны мировых лидеров, но что может сделать обычный
                  гражданин в другой стране, чтобы изменить ситуацию? Если вы
                  готовы внести свой вклад в помощь украинскому народу, вы
                  пришли по адресу. Читайте дальше, чтобы получить полный список
                  заслуживающих доверия организаций для поддержки и других
                  способов помочь и оставаться в курсе разворачивающегося
                  кризиса. Ваша поддержка может помочь изменить ситуацию.
                </p>
                <br />
                <p>
                  <b>
                    Пожертвования помогут оказать столь необходимую медицинскую
                    помощь гражданским лицам и военнослужащим.
                  </b>{" "}
                  <p>
                    <b> Больницы и медицинские учреждения на востоке Украины</b>
                    находятся под обстрелом, а врачи работают в опасных
                    условиях, чтобы заботиться о гражданских лицах и солдатах.
                    Пожертвования помогут фельдшерам, врачам, аптечкам первой
                    помощи и медицинской подготовкена передовой и в зоне
                    бедствия. Пожертвуйте этим организациям, чтобы помочь:
                  </p>
                  <p>
                    <b>Некоммерческая волонтерская организация</b>, которая
                    распределяет деньги, продукты питания и медикаменты
                    украинским беженцам и семьям, потерявшим солдат на войне:{" "}
                    <a href="https://unitedhelpukraine.org/about-us">
                      https://unitedhelpukraine.org/about-us
                    </a>
                  </p>
                  <p>
                    <b> Некоммерческая благотворительная организация</b>,
                    предоставляющая украинцам медицинское оборудование:{" "}
                    <a href="https://www.facebook.com/RazomForUkraine">
                      https://www.facebook.com/RazomForUkraine
                    </a>
                  </p>
                  <p>
                    Предоставляет рюкзаки первой помощи фельдшерам на передовой.
                    В каждом рюкзаке достаточно припасов, чтобы вылечить до 10
                    человек:{" "}
                    <a href="https://www.facebook.com/donate/507886070680475">
                      https://www.facebook.com/donate/507886070680475
                    </a>
                  </p>
                  <p>
                    <b>Международный комитет Красного Креста</b> оказывает
                    гуманитарную и медицинскую помощь украинцам, пострадавшим от
                    вторжения:{" "}
                    <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine">
                      https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine
                    </a>
                  </p>
                  <p>
                    <b>Украинский Красный Крест</b> оказывает гуманитарную
                    помощь беженцам и обучает врачей:{" "}
                    <a href="https://redcross.org.ua/en/donate">
                      https://redcross.org.ua/en/donate
                    </a>
                  </p>
                  <p>
                    <b>Британский Красный Крест</b> начал сбор средств для
                    предоставления продовольствия, медикаментов, жилья и воды
                    украинцам в кризис:{" "}
                    <a href="https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal">
                      https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal
                    </a>
                  </p>
                </p>
                <br />
                <h2>Помощь украинским военным.</h2>
                <p>
                  <b>
                    {" "}
                    Украинские военные в меньшинстве и нуждаются в поддержке.
                  </b>
                  денег, снаряжения, медицинской помощи и других ресурсов не
                  хватает. Украинские гражданские лица жертвуют свои собственные
                  деньги и сами собирают и распределяют ресурсы для поддержки
                  своих осажденных войск. Пожертвование одной из этих
                  организаций помогает дать украинским силам шанс на борьбу:
                </p>
                <p>
                  <b>Управляет закупкой продовольствия</b>, униформы и других
                  предметов снабжения и распределяет помощь непосредственно
                  украинским войскам:{" "}
                  <a href="https://armysos.com.ua/en">
                    https://armysos.com.ua/en
                  </a>
                </p>
                <p>
                  <b>Оказывает медицинскую помощь</b> украинским солдатам и
                  поддержку их семьям:{" "}
                  <a href="https://www.rsukraine.org">
                    https://www.rsukraine.org
                  </a>
                </p>
                <p>
                  <b>Оказывает медицинскую помощь</b> украинским солдатам и
                  поддержку их семьям:{" "}
                  <a href="https://www.rsukraine.org">
                    https://www.rsukraine.org
                  </a>
                </p>
                <p>
                  {" "}
                  Предоставляет нелетальное защитное оборудование, аптечки
                  первой помощи и ремонт зданий:{" "}
                  <a href="http://wings-phoenix.org.ua/en/about-fund">
                    http://wings-phoenix.org.ua/en/about-fund
                  </a>
                </p>
                <br />
                <h2>Пожертвуйте на поддержку детей и семей.</h2>
                <p>
                  <b>
                    Пожертвования могут помочь детям и семьям выжить в сложных
                    условиях войны.
                  </b>{" "}
                  До 400 000 украинских детей в настоящее время живут в зоне
                  конфликта. В дополнение к медицинской помощи семьи нуждаются в
                  доступе к образованию, гигиеническим комплектам, финансовой
                  помощи и психосоциальным услугам. помогут гарантировать, что
                  украинские дети продолжают учиться, расти и справляться с
                  трудностями войны. Подумайте о пожертвовании в одну из этих
                  организаций, чтобы помочь:
                </p>
                <p>
                  <b>Лондонская организация</b>, оказывающая помощь уязвимым
                  украинским детям:{" "}
                  <a href="https://www.savethechildren.org/us/where-we-work/ukraine">
                    https://www.savethechildren.org/us/where-we-work/ukraine
                  </a>
                </p>
                <p>
                  <b>Оказывает психосоциальную поддержку украинским детям </b>и
                  семьям, пострадавшим от войны:{" "}
                  <a href="https://voices.org.ua/en">
                    https://voices.org.ua/en
                  </a>
                </p>
                <p>
                  <b>Международный комитет спасения</b> помогает семьям в зонах
                  конфликтов по всему миру и принимает чрезвычайные
                  пожертвования в Украину:{" "}
                  <a href="https://help.rescue.org/donate/crisis-in-ukraine">
                    https://help.rescue.org/donate/crisis-in-ukraine
                  </a>
                </p>
                <p>
                  <b>Украинский кризисный фонд CARE</b> раздает еду, воду,
                  гигиенические наборы и другую помощь украинским семьям,
                  женщинам и девочкам, а также пожилым людям:{" "}
                  <a href=" https://my.care.org/site/Donation">
                    https://my.care.org/site/Donation
                  </a>
                </p>
                <p>
                  <b>Агентство ООН по делам беженцев </b> оказывает финансовую
                  помощь и возможности для переселения украинских беженцев:{" "}
                  <a href="https://www.unrefugees.org/what-we-do">
                    https://www.unrefugees.org/what-we-do
                  </a>
                </p>
                <p>
                  <b>Инициатива Nova Ukraine</b> Heart2Heart собирает и
                  распространяет пакеты помощи нуждающимся украинцам:{" "}
                  <a href="https://novaukraine.org">https://novaukraine.org</a>
                </p>
                <br />
                <h2>
                  Читайте заслуживающие доверия украинские источники новостей.
                </h2>
                <p>
                  <b>
                    {" "}
                    Информирование с точной информацией борется с путаницей и
                    дезинформацией.
                  </b>{" "}
                  Пропаганда, ложные рассказы, фотографии и видео, вырванные из
                  контекста непроверенными СМИ, могут ввести зрителей в
                  заблуждение.Следуйте этим проверенным украинским источникам
                  новостей, чтобы оставаться в курсе конфликта:
                </p>
                <p>
                  <b>Kyiv Independent</b> - ведущий голос на передовой:{" "}
                  <a href="https://kyivindependent.com">
                    https://kyivindependent.com
                  </a>
                </p>
                <p>
                  <b>Новый Голос Украины </b>освещает новости на английском,
                  украинском и русском языках и предоставляет информативные
                  анализы и статьи украинских ученых:{" "}
                  <a href="https://english.nv.ua">https://english.nv.ua</a>
                </p>
                <p>
                  <b>Ukraine World </b>активно работает в социальных сетях, и
                  независимые журналисты на передовой собирают кадры из первых
                  рук:{" "}
                  <a href="https://ukraineworld.org">
                    https://ukraineworld.org
                  </a>
                </p>
                <p>
                  <b>Kyiv Post</b> не является независимой и финансируется
                  государством, но предоставляет последние новости и заявления
                  непосредственно от украинского правительства:{" "}
                  <a href="https://www.kyivpost.com">
                    https://www.kyivpost.com
                  </a>
                </p>
                <h2>Присоединяйтесь к мирному протесту.</h2>
                <p>
                  <b>
                    Протестующие распространяют информацию и требуют действий от
                    вашего правительства.
                  </b>{" "}
                  Антивоенные протесты прорастают по всему миру. Многие из них
                  происходят за пределами зданий российских посольств в крупных
                  городах. Протесты и митинги - это эффективные способы донести
                  свою позицию, когда вы не можете пожертвовать или поделиться
                  информацией (или когда вы просто хотите сделать больше).
                </p>
                <p>
                  <b>Поиск протеста рядом с вами:</b>{" "}
                  <a href="https://standwithukraine.live/peace-protests">
                    https://standwithukraine.live/peace-protests
                  </a>
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
        a {
          color: blue;
          text-decoration: underline;
        }
        a:hover {
          text-decoration: none;
        }
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
export default SupportForUkraine;
