const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

<<<<<<< HEAD
=======
const toDos = [];

function saveToDos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

>>>>>>> f1670a0295f31361d194d0d55edc83fc9832fa15
function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
<<<<<<< HEAD
=======
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
>>>>>>> f1670a0295f31361d194d0d55edc83fc9832fa15
}

toDoForm.addEventListener('submit', handleToDoSubmit);
