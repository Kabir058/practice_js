function applyDiscount(items, discountPercent) {
    return items.map(item => {
        return {
            ...item,
            discountedPrice: (item.price - item.price * (discountPercent / 100)).toFixed(2)
        };
    });
}

console.log("Prices after 10% discount:", applyDiscount(devices, 10));
