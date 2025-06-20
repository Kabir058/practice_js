function validateEmail(email) {
    if (typeof email !== "string") return "Invalid input";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "Valid email" : "Invalid email";
}

console.log(validateEmail("kabir@example.com"));
