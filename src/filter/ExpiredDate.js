import dayjs from "dayjs";

export default function (value) {
    if (value === '') {
        return ''
    }
    return dayjs.unix(value).format("YYYY.MM.DD");

}