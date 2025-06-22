function getMiddleChar(str) {
    if (typeof str !== "string") return "Invalid input";

    const mid = Math.floor(str.length / 2);
    return str.length % 2 === 0 ? str[mid - 1] + str[mid] : str[mid];
}

console.log(getMiddleChar("Kabir"));    // ➤ "b"
console.log(getMiddleChar("Coding"));   // ➤ "di"
