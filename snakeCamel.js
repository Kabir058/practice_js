function toCamelCase(snakeStr) {
    if (typeof snakeStr !== "string") return "Invalid input";

    return snakeStr.split("_").map((word, index) => {
        if (index === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
    }).join("");
}

console.log(toCamelCase("kabir_learning_code")); // ➤ kabirLearningCode
