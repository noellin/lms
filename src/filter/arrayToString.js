export default function (arr) {
    let string  = arr.join().replace(',',' ~ ')
    return string
}