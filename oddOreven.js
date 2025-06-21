function isEvenOrOdd(num) {
    if (typeof num !== "number") return "Invalid input";

    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEvenOrOdd(5)); // ➤ "Odd"
