function capitalizeWords(sentence) {
    if (typeof sentence !== "string") {
        return "Invalid input";
    }

    const words = sentence.split(" ");
    const capitalized = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalized.join(" ");
}

console.log(capitalizeWords("kabir is building logic step by step"));
