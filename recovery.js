function cleanArray(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    return arr.filter(Boolean);
}

console.log(cleanArray([0, 1, false, 2, "", 3, null, undefined])); // ➤ [1, 2, 3]
