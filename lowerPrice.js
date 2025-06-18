function isAnyDeviceCheap(items, maxPrice) {
    return items.some(item => item.price < maxPrice);
}

console.log("Is there any device cheaper than 10000?", isAnyDeviceCheap(devices, 10000));  // false
