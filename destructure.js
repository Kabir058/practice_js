function displayProfile(user) {
    if (typeof user !== "object" || !user.name || !user.age) {
        return "Invalid user object";
    }

    const { name, age, profession = "Not given" } = user;
    return `${name} is ${age} years old and works as a ${profession}.`;
}

console.log(displayProfile({ name: "Kabir", age: 24 }));
