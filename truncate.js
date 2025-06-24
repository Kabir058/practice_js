function truncateText(text, maxLength) {
    if (typeof text !== "string" || typeof maxLength !== "number") return "Invalid input";

    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
}

console.log(truncateText("Kabir is building logic skills", 15)); // ➤ "Kabir is buildin..."
