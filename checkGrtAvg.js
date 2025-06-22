function countAboveAverage(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    const avg = arr.reduce((a, b) => a + b) / arr.length;
    return arr.filter(n => n > avg).length;
}

console.log(countAboveAverage([10, 20, 30, 40])); // ➤ 2
