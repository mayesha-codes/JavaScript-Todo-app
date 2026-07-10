const addTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("new-task");
const errorMessage = document.getElementById("error-message");
const taskList = document.getElementById("task-list");



addTaskForm.addEventListener("submit", handleAddTask);


function handleAddTask(event){
    event.preventDefault();
    // Reading the input value here
    const newTask = newTaskInput.value.trim();
    console.log("New task:", newTask);
    if (newTask === "") {
        errorMessage.textContent = "Please enter a task.";
        return;
    }

}
