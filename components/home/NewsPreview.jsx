import Link from "next/link";
import dateProcessor from "../../lib/dateProcessor";

const NewsPreview = ({ id, item }) => {
  const { date, description, link, text, title } = item;
  // id = id % newsDataLenght;
  // if (id < 0) {
  //   id = newsDataLenght + id;
  // }
  // if (id >= newsDataLenght) {
  //   id = id - newsDataLenght;
  // }
  // const post = newsData[id];
  return (
    <div className="news-card">
      <p className="date">{dateProcessor(date)}</p>
      <Link href={"/news/" + link}>
        <p className="title">
          <a>{title}</a>
        </p>
      </Link>
      <style jsx>
        {`
          .news-card {
            width: 15rem;
            padding: 0rem 1rem;
            border-left: 1px solid gray;
          }
          .date {
            color: gray;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .title {
            font-weight: bold;
            font-size: 1rem;
            color: #1a1a1a;
            cursor: pointer;
          }
          .title:hover {
            color: #d92121;
            transition: all 0.2s;
          }
        `}
      </style>
    </div>
  );
};
export default NewsPreview;
