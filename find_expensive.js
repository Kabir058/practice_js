function getMostExpensive(items) {
    let max = items[0];
    for (let item of items) {
        if (item.price > max.price) {
            max = item;
        }
    }
    return max;
}

console.log("Most Expensive:", getMostExpensive(devices));
