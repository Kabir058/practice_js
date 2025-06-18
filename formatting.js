function printFormattedDevices(items) {
    for (let item of items) {
        console.log(`${item.name} ➤ ${item.price} tk`);
    }
}

printFormattedDevices(devices);
