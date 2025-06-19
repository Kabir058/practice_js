let todoList = [];

function addTask(task) {
    if (typeof task !== "string" || task.trim() === "") {
        return "Enter a valid task!";
    }
    todoList.push(task);
    return `Task added: "${task}"`;
}

function showTasks() {
    if (todoList.length === 0) {
        return "Your to-do list is empty!";
    }
    return todoList.map((task, index) => `${index + 1}. ${task}`).join("\n");
}

addTask("Learn JavaScript");
addTask("Push code to GitHub");
console.log(showTasks());
