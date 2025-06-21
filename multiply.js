function multiplyAll(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    let product = 1;
    for (let num of arr) {
        product *= num;
    }

    return product;
}

console.log(multiplyAll([2, 3, 4])); // ➤ 24
