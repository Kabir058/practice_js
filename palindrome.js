function isPalindrome(text) {
    if (typeof text !== "string") {
        return "Invalid input";
    }

    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        return `"${text}" is a palindrome.`;
    } else {
        return `"${text}" is not a palindrome.`;
    }
}

console.log(isPalindrome("Racecar"));
