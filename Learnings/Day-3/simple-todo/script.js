let todos = [];
const input = document.getElementById("input");
const addTodo = document.getElementById("addTodo");
const listTodos = document.getElementById("listTodos");
const deleteAllTodos = document.getElementById("deleteAllTodos");

const storedTodos = localStorage.getItem("todos");
if (storedTodos) {
  todos = JSON.parse(storedTodos);
}

function editLogic(todo) {
  const newText = prompt("Edit your todo", todo.text);
  if (newText == null || newText.trim() === "") return;

  todo.text = newText;
  saveTodo();
  renderTodos();
}

function deleteLogic(todo) {
  todos = todos.filter((t) => t.id !== todo.id);
  saveTodo();
  renderTodos();
}

function renderTodos() {
  listTodos.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerText = todo.text;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", () => editLogic(todo));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => deleteLogic(todo));

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    listTodos.appendChild(li);
  });
}

addTodo.addEventListener("click", () => {
  if (input.value.trim() === "") return alert("you have to enter something");

  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false,
  };

  todos.push(todo);
  saveTodo();
  renderTodos();
  input.value = "";
});

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

deleteAllTodos.addEventListener("click", () => {
  todos = [];
  saveTodo();
  renderTodos();
});
renderTodos();
