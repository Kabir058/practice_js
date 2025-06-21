function findAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";

    let total = 0;
    for (let num of arr) {
        total += num;
    }

    return total / arr.length;
}

console.log(findAverage([10, 20, 30])); // ➤ 20
