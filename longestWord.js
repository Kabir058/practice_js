function findLongestWord(sentence) {
    if (typeof sentence !== "string") {
        return "Invalid input";
    }

    const words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return `The longest word is "${longest}" with ${longest.length} characters.`;
}

console.log(findLongestWord("Kabir is learning JavaScript programming passionately"));
