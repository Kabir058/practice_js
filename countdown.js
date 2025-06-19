function countdown(start) {
    if (typeof start !== "number" || start < 0) {
        return "Invalid input";
    }

    console.log("Countdown starts:");
    for (let i = start; i >= 0; i--) {
        console.log(i === 0 ? "Time's up!" : i);
    }
}

countdown(10);
