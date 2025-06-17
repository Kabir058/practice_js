function filterByPrice(items, maxPrice) {
    return items.filter(item => item.price < maxPrice);
}

console.log("Devices under 20000:", filterByPrice(devices, 20000));
