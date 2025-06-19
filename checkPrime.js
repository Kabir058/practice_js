function isPrime(number) {
    if (typeof number !== "number" || number < 2) {
        return "Invalid input or not a prime.";
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `${number} is not a prime number.`;
        }
    }

    return `${number} is a prime number.`;
}

console.log(isPrime(13));
