function formatAndSort(text) {
    if (typeof text !== "string") return "Invalid input";

    const words = text.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    return words.sort((a, b) => a.length - b.length);
}

console.log(formatAndSort("kabir is improving his javascript skill set"));
