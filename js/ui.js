const taskList = document.getElementById("task-list");

function renderTask(task, editingTaskId) {
  const isEditing = task.id === editingTaskId;
  console.log(`Rendering task with ID: ${task.id}, isEditing: ${isEditing}`);
  if(isEditing){
    return `<li class="task task--editing">
              Editing...
            </li>`;
  }
  return `<li class="task">
             <label class="task__check">
                 <input type="checkbox"  data-task-id="${task.id}" ${task.completed ? "checked" : ""}>
                 <span class="task__box"></span>
             </label>

             <span class="task__text">${task.text}</span>

             <div class="task__actions">
                 <button class="icon-btn icon-btn--edit" data-action="edit" data-task-id="${task.id}">Edit</button>
                 <button class="icon-btn icon-btn--delete" data-action="delete"  data-task-id="${task.id}">Delete</button>
             </div>
         </li>`;
}

export function renderTasks(tasks, editingTaskId) {
  let listItems = "";
  for (const task of tasks) {
    listItems += renderTask(task, editingTaskId);
    
  }
  taskList.innerHTML=listItems;
}