const taskList = document.getElementById("task-list");

function renderTask(task, editingTaskId) {
  const isEditing = task.id === editingTaskId;
  
  if(isEditing){
    return `<li class="task task--editing">
              <label class="task__check">
                 <input type="checkbox"  data-task-id="${task.id}" ${task.completed ? "checked" : ""}>
                 <span class="task__box"></span>
             </label>
            
            <div class="task__edit">
                  <input type="text" id="edit-task"       class="task__edit-input" value="${task.text}"       data-task-id="${task.id}">
                  <p id="error-message-edit"      class="error-message-edit"></p>
            </div>
            
             <div class="task__actions">
                 <button class="icon-btn" data-action="cancel" data-task-id="${task.id}">Cancel</button>
                 <button class="icon-btn" data-action="save" data-task-id="${task.id}">Save</button>
             </div>
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