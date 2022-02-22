import Link from "next/link";
import newsData from "/data/files/news";
let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const NewsPreview = ({id}) => {
    id = id%newsData.length;
    if (id < 0) {
        id = newsData.length - id;
    }
    if (id >= newsData.length) {
        id = id - newsData.length;
    }
    const date = () => {
        const dayMonth = new Date().getDate() == new Date(newsData[id].date).getDate() ? "" : new Date(newsData[id].date).getDate() + " " + months[new Date(newsData[id].date).getMonth()] + " ";
        const hours = new Date(newsData[id].date).getHours() < 10 ? "0" + new Date(newsData[id].date).getHours() : new Date(newsData[id].date).getHours();
        const minutes = new Date(newsData[id].date).getMinutes() < 10? "0" + new Date(newsData[id].date).getMinutes() : new Date(newsData[id].date).getMinutes();
        const time = hours + ":" + minutes;
        return dayMonth + time;
    }
    return (
        <>
            <p className="date">{date()}</p>
            <Link href={"/news"+newsData[id].link}>
                <p className="title"><a>{newsData[id].title}</a></p>
            </Link>
            <style jsx>
                {`
                    .date {
                        color: gray;
                        font-size: .7rem;
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
                        transition: all .2s;
                    }
                `}
            </style>
        </>
    )
}
export default NewsPreview;