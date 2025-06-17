function averagePrice(products) {
    let sum = 0;
    for (let item of products) {
        sum += item.price;
    }
    return (sum / products.length).toFixed(2);
}

console.log("Average Price:", averagePrice(devices));
