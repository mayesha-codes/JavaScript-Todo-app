import { createTask, toggleTaskCompleted, deleteTask} from "./todo.js";
import { renderTasks } from "./ui.js";
const addTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("new-task");
const errorMessage = document.getElementById("error-message");
const taskList=document.getElementById("task-list");


const tasks = [];
let editingTaskId = null;

addTaskForm.addEventListener("submit", handleAddTask);
taskList.addEventListener("change", handleTaskCompletion);
taskList.addEventListener("click", handleTaskActions);

// Function to handle adding a new task
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
    renderTasks(tasks, editingTaskId);
}

// Function to handle task completion toggle
function handleTaskCompletion(event) {
   const targetType = event.target.type;
   const taskId=Number(event.target.dataset.taskId);
   console.log(`Event target type: ${targetType}`);
   if(targetType === "checkbox"){
        toggleTaskCompleted(taskId, tasks);
        renderTasks(tasks, editingTaskId);
    }
}

// Function to handle task deletion
function handleTaskActions(event) {
    const action = event.target.dataset.action;
    const taskId=Number(event.target.dataset.taskId);
    if (action === "edit"){
        editingTaskId = taskId;
        renderTasks(tasks, editingTaskId);
    }else if(action === "delete"){
        deleteTask(taskId, tasks);
        renderTasks(tasks, editingTaskId); 
    }
}