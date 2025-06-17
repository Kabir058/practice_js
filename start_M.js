function filterByFirstLetter(items, letter) {
    return items.filter(item => item.name.toLowerCase().startsWith(letter.toLowerCase()));
}

console.log("Devices starting with 'M':", filterByFirstLetter(devices, 'm'));
