function isSentencePalindrome(sentence) {
    if (typeof sentence !== "string") return "Invalid input";

    let clean = sentence.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversed = clean.split('').reverse().join('');

    return clean === reversed;
}

console.log(isSentencePalindrome("A man, a plan, a canal: Panama")); // ➤ true
