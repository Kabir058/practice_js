function countWords(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    const words = sentence.trim().split(/\s+/);
    return `Total words: ${words.length}`;
}

console.log(countWords("Kabir is improving every single day!")); // ➤ 6
