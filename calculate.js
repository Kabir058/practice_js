const devices = [
    { name: 'Laptop', price: 35000 },
    { name: 'Tablet', price: 15000 },
    { name: 'Mobile', price: 20000 }
];

function getTotalCost(products) {
    let total = 0;
    for (let item of products) {
        total += item.price;
    }
    return total;
}

console.log("Total Cost:", getTotalCost(devices), "tk");
