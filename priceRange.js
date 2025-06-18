function findDevicesInRange(items, minPrice, maxPrice) {
    return items.filter(item => item.price >= minPrice && item.price <= maxPrice);
}

console.log("Devices between 15000 and 30000:", findDevicesInRange(devices, 15000, 30000));
