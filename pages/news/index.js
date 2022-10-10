import Head from "next/head";
import TopMenu from "../../components/home/TopMenu";
import Menu from "../../components/home/Menu";
import AllNewsComponent from "../../components/home/AllNewsComponent";
import Blog from "../../components/home/Blog";
import Footer from "../../components/home/Footer";

const AllNews = () => {
  return (
    <div>
      {/* <Head>
        <title>NP Russia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      <div className="news-wrap">
        <AllNewsComponent />
      </div>
      <Footer />
      <style jsx>
        {`
          @media (min-width: 0px) {
            .Menu {
              visibility: hidden;
              position: absolute;
            }
          }
          @media (min-width: 800px) {
            .Menu {
              visibility: visible;
              max-width: 100%;
              position: -webkit-sticky;
              position: sticky;
              height: auto;
              top: 0;
              z-index: 2;
            }
          }
          .news-wrap {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
};
export default AllNews;
