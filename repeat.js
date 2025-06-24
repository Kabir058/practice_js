function firstRepeat(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    let seen = new Set();
    for (let el of arr) {
        if (seen.has(el)) return el;
        seen.add(el);
    }

    return "No repeats";
}

console.log(firstRepeat([2, 4, 5, 6, 4, 7])); // ➤ 4
