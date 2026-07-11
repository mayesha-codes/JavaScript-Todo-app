import { createTask } from "./todo.js";
import { renderTasks } from "./ui.js";
const addTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("new-task");
const errorMessage = document.getElementById("error-message");


const tasks = [];

addTaskForm.addEventListener("submit", handleAddTask);


function handleAddTask(event){
    event.preventDefault();
    // Reading the input value here
    const newTask = newTaskInput.value.trim();
    
    if (newTask === "") {
        errorMessage.textContent = "Please enter a task";
        return;
    }

    errorMessage.textContent = "";
    const task = createTask(newTask);
    tasks.push(task);
    newTaskInput.value = "";
    renderTasks(tasks);
}
