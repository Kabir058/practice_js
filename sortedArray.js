function isSorted(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

console.log(isSorted([1, 3, 5, 9])); // ➤ true
