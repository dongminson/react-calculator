export const format = (number) => {
    let length = number.length;
    let float = parseFloat(number);
    if (length > 10) {
        float = float.toExponential(6);
    }
    let string = float.toString();
    return string;
}