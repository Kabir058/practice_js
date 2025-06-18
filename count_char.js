function countAllNameChars(items) {
    let total = 0;
    for (let item of items) {
        total += item.name.length;
    }
    return total;
}

console.log("Total characters in all device names:", countAllNameChars(devices));
