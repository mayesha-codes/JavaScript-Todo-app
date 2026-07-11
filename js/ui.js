const taskList = document.getElementById("task-list");

export function renderTasks(tasks) {
  taskList.innerHTML=`<li>${tasks[0].text}</li>`
}