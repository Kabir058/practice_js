function isEmptyObject(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) return "Invalid input";

    return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({})); // ➤ true
