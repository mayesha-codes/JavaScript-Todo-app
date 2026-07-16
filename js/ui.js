const taskList = document.getElementById("task-list");

function renderTask(task) {
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

export function renderTasks(tasks) {
  let listItems = "";
  for (const task of tasks) {
    listItems += renderTask(task);
    
  }
  taskList.innerHTML=listItems;
}