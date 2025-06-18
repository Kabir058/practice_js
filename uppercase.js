function getUppercaseNames(items) {
    return items.map(item => item.name.toUpperCase());
}

console.log("Uppercase Names:", getUppercaseNames(devices));
