function getProperty(obj, key) {
    if (typeof obj !== "object" || typeof key !== "string") {
        return "Invalid input";
    }

    return key in obj ? obj[key] : "Property not found";
}

console.log(getProperty({ name: "Kabir", age: 24 }, "age"));
