function findPairs(arr, target) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(findPairs([2, 4, 3, 5, 7], 7));
