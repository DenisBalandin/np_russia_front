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

export default function dateProcessor(date) {
  var datet = new Date(date),
    mnth = ("0" + (datet.getMonth() + 1)).slice(-2),
    day = ("0" + datet.getDate()).slice(-2);
  const dayMonth =
    new Date().getDate() == new Date(date).getDate()
      ? ""
      : new Date(date).getDate() + " " + months[new Date(date).getMonth()] + " ";

  const hours =
    new Date(date).getHours() < 10
      ? "0" + new Date(date).getHours()
      : new Date(date).getHours();

  const minutes =
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes();

  const time = hours + ":" + minutes;

  return dayMonth + time;
}
