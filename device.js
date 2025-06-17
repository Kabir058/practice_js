
const devices = [
    { name: 'Laptop', price: 35000 },
    { name: 'Tablet', price: 15000 },
    { name: 'Mobile', price: 20000 }
];

function calculateTotal(devices) {
    let total = 0;
    for (let device of devices) {
        total += device.price;
    }
    return total;
}

const totalCost = calculateTotal(devices);
console.log("Total cost of all devices: " + totalCost + " tk");
