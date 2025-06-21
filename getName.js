function fullName(user) {
    if (typeof user !== "object") return "Invalid input";

    return `${user.firstName} ${user.lastName}`;
}

console.log(fullName({ firstName: "Kabir", lastName: "Hossain" })); // ➤ "Kabir Hossain"
