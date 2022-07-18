const calculate = (num1, num2, num3) => {
    let first = num1 + 2;
    let second = num2 + 2;
    let third = num3 + 2;
    const result = first * second * third;
    return result;
}
const final = calculate(5, 2, 2);
console.log(final);