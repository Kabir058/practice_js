function capitalize(text) {
    if (typeof text !== "string") return "Invalid input";

    return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(capitalize("kabir")); // ➤ "Kabir"
