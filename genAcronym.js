function generateAcronym(phrase) {
    if (typeof phrase !== "string") return "Invalid input";

    return phrase
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
}

console.log(generateAcronym("Kabir Edusphere Academy")); // ➤ "KEA"
