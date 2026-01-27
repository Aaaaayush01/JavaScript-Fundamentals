const todoList = [];
renderTodoList();
function addTodo() {
  const inputElement = document.querySelector(".newTask");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".dueDate");
  const dueDate = dateInputElement.value;
  //todoList.push({name : name,
  //dueDate:dueDate});
  todoList.push({ name, dueDate });
  inputElement.value = "";
  renderTodoList();
}
function renderTodoList() {
  let todoListElement = "";
  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
    " class = "deleteButton">Delete</button>
    </div>`;
    todoListElement += html;
  }
  document.querySelector(".myTodoList").innerHTML = todoListElement;
}
