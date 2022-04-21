const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

export default function newsArray (newsData) {
    let arr = [];
    let a = 0;
    arr[0] = '' + new Date(newsData[0].date).getDate()
            + ' ' + months[new Date(newsData[0].date).getMonth()]
            + ' ' + new Date(newsData[0].date).getFullYear()
    for (let i = 0; i < newsData.length; i++) {
        let str = '' + new Date(newsData[0].date).getDate()
                + ' ' + months[new Date(newsData[0].date).getMonth()]
                + ' ' + new Date(newsData[0].date).getFullYear()
        if (str == arr[arr.length-1-a]) {
            arr.push({title: newsData[i].title,
                    link: newsData[i].link,
                    time: (new Date(newsData[i].date).getHours() < 10
                    ? "0" + new Date(newsData[i].date).getHours()
                    : new Date(newsData[i].date).getHours()) + ":" + 
                    (new Date(newsData[i].date).getMinutes() < 10
                    ? "0" + new Date(newsData[i].date).getMinutes()
                    : new Date(newsData[i].date).getMinutes())})
            a++;
        } else {
            arr.push(str);
            a = 0;
        }
    }
    return arr;
}