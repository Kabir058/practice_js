function longestDeviceName(items) {
    let longest = items[0];
    for (let item of items) {
        if (item.name.length > longest.name.length) {
            longest = item;
        }
    }
    return longest.name;
}

console.log("Longest Device Name:", longestDeviceName(devices));
