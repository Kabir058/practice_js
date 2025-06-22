function convertTime(minutes) {
    if (typeof minutes !== "number" || minutes < 0) return "Invalid input";

    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs} hour(s) and ${mins} minute(s)`;
}

console.log(convertTime(135)); // ➤ 2 hour(s) and 15 minute(s)
