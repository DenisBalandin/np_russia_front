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
    arr[0] = '' + new Date(newsData[0].createdAt).getDate()
            + ' ' + months[new Date(newsData[0].createdAt).getMonth()]
            + ' ' + new Date(newsData[0].createdAt).getFullYear()
    for (let i = 0; i < newsData.length; i++) {
        let str = '' + new Date(newsData[0].createdAt).getDate()
                + ' ' + months[new Date(newsData[0].createdAt).getMonth()]
                + ' ' + new Date(newsData[0].createdAt).getFullYear()
        if (str == arr[arr.length-1-a]) {
            arr.push({title: newsData[i].title,
                    slug: newsData[i].slug,
                    time: (new Date(newsData[i].createdAt).getHours() < 10
                    ? "0" + new Date(newsData[i].createdAt).getHours()
                    : new Date(newsData[i].createdAt).getHours()) + ":" + 
                    (new Date(newsData[i].createdAt).getMinutes() < 10
                    ? "0" + new Date(newsData[i].createdAt).getMinutes()
                    : new Date(newsData[i].createdAt).getMinutes())})
            a++;
        } else {
            arr.push(str);
            a = 0;
        }
    }
    return arr;
}