function convertTemp(value, unit) {
    if (typeof value !== "number" || (unit !== "C" && unit !== "F")) {
        return "Invalid input";
    }

    return unit === "C"
        ? `${(value * 9) / 5 + 32}°F`
        : `${((value - 32) * 5) / 9}°C`;
}

console.log(convertTemp(30, "C")); // ➤ "86°F"
