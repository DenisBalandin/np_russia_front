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
    mnth = ("0" + (datet.getMonth() + 1))?.slice(-2),
    day = ("0" + datet.getDate())?.slice(-2);
  const dayMonth =
    new Date(date)?.getDate() +
    " " +
    months[new Date(date)?.getMonth()] +
    " " +
    new Date(date)?.getFullYear();
  return dayMonth;
}
