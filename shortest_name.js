function getShortestName(names) {
    if (names.length === 0) return "Empty array";
    let smallest = names[0];
    for (let name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}

console.log("Shortest Name:", getShortestName(['Kabir', 'Rafi', 'Ro', 'Fahim']));
