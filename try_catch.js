function parseJson(jsonStr) {
    try {
        const data = JSON.parse(jsonStr);
        return `Parsed name: ${data.name || "Not found"}`;
    } catch (err) {
        return "Invalid JSON format!";
    }
}

console.log(parseJson('{"name":"Kabir"}'));
console.log(parseJson('invalid JSON'));
