let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
let TodoCount = todoList.length;

function onToDocheckBoxStaus(uniqueCheckbox, labelId) {
    let checkboxElement = document.getElementById(uniqueCheckbox);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function OnDeleteTodo(todoId) {
    let TodoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(TodoElement);
}

function createAndAppendTodo(todo) {
    let uniqueCheckbox = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = uniqueCheckbox;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onToDocheckBoxStaus(uniqueCheckbox, labelId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", uniqueCheckbox);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        OnDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

function OnAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userValue = userInputElement.value;
    if (userInputElement === "") {
        alert("Enter Valid Text");
        return;
    }
    TodoCount = TodoCount + 1;
    let newTodo = {
        text: userInputElement,
        uniqueNo: TodoCount
    }
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}
let addTodoButton = document.getElementById("AddtodoElement");
addTodoButton.onclick = function() {
    OnAddTodo();
}
for (let todo of todoList) {
    createAndAppendTodo(todo);
}
