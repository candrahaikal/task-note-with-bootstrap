const taskInput = document.getElementById('task-input');
const taskDescription = document.getElementById('task-description');
const taskSubmit = document.getElementById('task-submit');
const taskGroup = document.getElementById('task-group');
let counter = 1;

taskSubmit.addEventListener('click', () => {
  let taskElement = document.createElement("li");
  let taskNote = document.createTextNode(`${counter}. ${taskInput.value}`);
  counter++;
  taskElement.appendChild(taskNote);
  taskElement.classList.add("list-group-item");
  taskGroup.appendChild(taskElement);

  taskInput.value = '';
})