function includesWord(sentence, word) {
    if (typeof sentence !== "string" || typeof word !== "string") return "Invalid input";

    return sentence.toLowerCase().includes(word.toLowerCase());
}

console.log(includesWord("Kabir is coding", "coding")); // ➤ true
