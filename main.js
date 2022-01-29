const createToDoBtn = document.getElementsByClassName('createToDoBtn');

const createArea = document.getElementsByClassName('create');

const form = document.getElementById('form');

const bgElement = document.getElementsByClassName('bg');

function showCreateModal() {
    bgElement[0].style.display = 'block';
    createArea[0].style.display = 'block';
    createToDoBtn[0].style.display = 'none';
}

function hideCreateModal() {
    bgElement[0].style.display = 'none';
    createArea[0].style.display = 'none';
    createToDoBtn[0].style.display = 'block';
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


        const todoItem = new createElement('li','class','todos_item',item);
        const div = new createElement('div','class','btn-wrap','');
        const finishBtn = new createElement('button','type','button','完了');
        const delBtn = new createElement('button','type','button','削除');


        div.appendChild(finishBtn);
        div.appendChild(delBtn);
        todoItem.appendChild(div);
        todoList[0].appendChild(todoItem);
    }
}

class createElement {
    constructor(tag,atb,atbName,text){
        const element = document.createElement(tag);
        element.setAttribute(atb,atbName);
        element.innerText = text;
        return element;
    }
}


form.addEventListener('submit',save);

window.addEventListener('load',()=>{
    showToDo();
});