function convertToUSD(items, rate) {
    return items.map(item => {
        return {
            name: item.name,
            priceUSD: (item.price / rate).toFixed(2)
        };
    });
}

console.log("Prices in USD:", convertToUSD(devices, 110));
