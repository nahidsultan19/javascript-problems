

function largestNumber(numbers) {
    const largest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
let ages = [10, 33, 20, 40, 55, 60, 77, 5, 9];
const 