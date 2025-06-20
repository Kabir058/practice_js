function customFilter(arr, callback) {
    if (!Array.isArray(arr) || typeof callback !== "function") {
        return "Invalid input";
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(customFilter([1, 2, 3, 4], (n) => n % 2 === 0));

