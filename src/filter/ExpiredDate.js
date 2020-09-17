import dayjs from "dayjs";

export default function (value) {

    return dayjs.unix(value).format("YYYY-MM-DD");

}