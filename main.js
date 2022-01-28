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

function save(){
    const inputVal = document.getElementsByName('todo');
    const value = inputVal[0].value;
    localStorage.setItem(localStorage.length,value);
}

function showToDo(){
    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.getItem(i);
        const todoList = document.getElementsByClassName('todos_list');
        const todoItem = document.createElement("li");
        todoItem.setAttribute('class','todos_item');
        todoItem.innerText = item;
        todoList[0].appendChild(todoItem);
    }
}


form.addEventListener('submit',save);

window.addEventListener('load',()=>{
    showToDo();
});