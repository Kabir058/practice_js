function getDeviceNames(devices) {
    return devices.map(device => device.name).join(", ");
}

console.log("Device Names:", getDeviceNames(devices)); 

