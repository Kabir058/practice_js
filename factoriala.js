function factorial(n) {
    if (typeof n !== "number" || n < 0) return "Invalid input";

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // ➤ 120
