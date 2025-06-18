function endsWithLetter(items, letter) {
    return items.filter(item => item.name.toLowerCase().endsWith(letter.toLowerCase()));
}

console.log("Names ending with 'e':", endsWithLetter(devices, 'e'));
