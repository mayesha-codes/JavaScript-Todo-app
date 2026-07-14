let i=1;
export function createTask(text) {
    return{
        id: i++,
        text: text,
        completed: false
    }
}


export function toggleTaskCompleted(taskid,tasks){
    for (const task of tasks){
        if (task.id === taskid){
            task.completed = !task.completed;
            break;
        }
    }
}