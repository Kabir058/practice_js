function sumEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }

    let sum = 0;
    for (let num of arr) {
        if (typeof num === "number" && num % 2 === 0) {
            sum += num;
        }
    }

    return `Sum of even numbers: ${sum}`;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
