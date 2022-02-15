import Head from 'next/head'
import Image from 'next/image'
import TopMenu from '../components/home/TopMenu'
import Slider from '../components/home/Slider'
import Menu from '../components/home/Menu'
import styles from '../styles/Home.module.css'
import News from '../components/home/News'
import Blog from '../components/home/Blog'
export default function Home() {
  return (
    <div>
      <Head>
        <title>NP Russia</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopMenu />  
      <Slider />
      <div className="Menu">
        <Menu />
      </div>
      <div className="news-wrap">
          <News />
      </div>
      {/* <Blog /> */}
        <style jsx>{`
          @media (min-width: 0px){
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
              z-index:2;
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
  )
}
