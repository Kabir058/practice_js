function countLetter(str, letter) {
    if (typeof str !== "string" || typeof letter !== "string") return "Invalid input";

    let count = 0;
    for (let char of str) {
        if (char === letter) count++;
    }

    return count;
}

console.log(countLetter("javascript", "a")); // ➤ 2
