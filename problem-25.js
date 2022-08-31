
// find the largest value from array

function largestNumber(numbers) {
    let largest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}

const num = [10, 33, 22, 99, 30, 36];
const result = largestNumber(num)
console.log(result);