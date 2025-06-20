function flattenArray(arr) {
    if (!Array.isArray(arr)) return "Invalid input";

    const flat = [];

    function flatten(item) {
        for (let i of item) {
            if (Array.isArray(i)) {
                flatten(i);
            } else {
                flat.push(i);
            }
        }
    }

    flatten(arr);
    return flat;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
