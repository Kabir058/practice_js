function convertTime(seconds) {
    if (typeof seconds !== "number" || seconds < 0) return "Invalid input";

    let h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    let m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    let s = String(seconds % 60).padStart(2, "0");

    return `${h}:${m}:${s}`;
}

console.log(convertTime(3661)); // ➤ "01:01:01"
