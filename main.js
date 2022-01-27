const createBtn = document.getElementsByClassName('createToDoBtn');

const createArea = document.getElementsByClassName('create');

const form = document.getElementById('form');

const bgElement = document.getElementsByClassName('bg');

function showCreateModal() {
    bgElement[0].style.display = 'block';
    createArea[0].style.display = 'block';
    createBtn[0].style.display = 'none';
}

function hideCreateModal() {
    bgElement[0].style.display = 'none';
    createArea[0].style.display = 'none';
    createBtn[0].style.display = 'block';
}

function submit(){
    const inputVal = document.getElementsByName('todo');
    const value = inputVal[0].value;
    const todoList = document.getElementsByClassName('todos_list');
    const todoItem = document.createElement("li");
    todoItem.setAttribute('class','todos_item');
    todoItem.innerText = value;
    todoList[0].appendChild(todoItem);
}

form.addEventListener('submit',submit);
