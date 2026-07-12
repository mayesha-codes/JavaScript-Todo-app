const taskList = document.getElementById("task-list");

export function renderTasks(tasks) {
  let listItems = "";
  for (const task of tasks) {
    listItems += `<li>${task.text}</li>`;
  }
  taskList.innerHTML=listItems;
}