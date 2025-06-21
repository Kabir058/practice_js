function findMax(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }

    return max;
}

console.log(findMax([2, 7, 5, 11, 3])); // ➤ 11
