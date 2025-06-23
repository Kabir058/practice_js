function countVowels(str) {
    if (typeof str !== "string") return "Invalid input";

    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) count++;
    }

    return `Total vowels: ${count}`;
}

console.log(countVowels("Kabir is learning JavaScript"));
