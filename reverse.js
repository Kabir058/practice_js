function reverseWords(sentence) {
    if (typeof sentence !== "string") {
        return "Invalid input";
    }

    const words = sentence.split(" ");
    const reversed = words.map(word => word.split("").reverse().join(""));

    return reversed.join(" ");
}

console.log(reverseWords("Kabir loves solving code problems"));
