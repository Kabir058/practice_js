function countVowels(text) {
    if (typeof text !== "string") {
        return "Invalid input";
    }

    const vowels = "aeiou";
    let count = 0;

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return `Vowel count in "${text}": ${count}`;
}

console.log(countVowels("Programming is fun!"));
