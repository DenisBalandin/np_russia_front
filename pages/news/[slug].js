import { getAllPostIds, getPostData } from '../../lib/posts'
import TopMenu from '../../components/home/TopMenu'
import Menu from '../../components/home/Menu'
import TopCategory from '../../components/post/TopCategory'
import MainImage from '../../components/post/MainImage'
import Content from '../../components/post/Content'
import Footer from '../../components/home/Footer'
import MostRead from '../../components/home/MostRead'
export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug, 1);
  return {
    props: {
      postData
    }
  }
}

export default function News ({ postData }) {
  const post = postData.post;
  return (
    <div>
      <TopMenu />
      <div className="Menu">
        <Menu />
      </div>
      <hr />
      {/* <TopCategory category={post.category} viewCount={post.views} date={post.createdAt} /> */}
      <MainImage post={post} />
      <Content article={post.text} />
      <div className="newest">
        <MostRead newest />
      </div>
      <Footer />
      <style jsx>{`
        @media (min-width: 0px){
          .Menu {
            visibility: hidden;
            position: absolute;
          }
          hr {
            width: 100%;
            height: .3rem;
            background-color: black;
            border: 0;
            margin: 0;
          }
          .newest {
            position: relative;
            min-height: 20rem;
            margin-bottom: 1rem;
          }
        }
        @media (min-width: 800px) {
          hr {
            display: none;
          }
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
      `}</style>
    </div>
  )
}