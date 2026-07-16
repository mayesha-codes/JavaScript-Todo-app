// Function to create a new task object
let i=1;
export function createTask(text) {
    return{
        id: i++,
        text: text,
        completed: false
    }
}

// Function to toggle the completed status of a task
export function toggleTaskCompleted(taskid,tasks){
    for (const task of tasks){
        if (task.id === taskid){
            task.completed = !task.completed;
            break;
        }
    }
}

// Function to delete a task from the tasks array
export function deleteTask(taskId, tasks){
    const index =tasks.findIndex(task=>task.id===taskId);
    console.log("the index:",index);
    tasks.splice(index,1);
}