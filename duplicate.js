function removeDuplicates(arr) {
    if (!Array.isArray(arr)) return "Invalid input";
    
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
