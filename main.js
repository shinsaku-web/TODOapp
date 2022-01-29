const createToDoBtn = document.getElementsByClassName('createToDoBtn');

const createArea = document.getElementsByClassName('create');

const form = document.getElementById('form');

const bgElement = document.getElementsByClassName('bg');

class createElement {
    constructor(tag,atb,atbName,text){
        const element = document.createElement(tag);
        element.setAttribute(atb,atbName);
        element.innerText = text;
        return element;
    }
}

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
    for (let key in localStorage) {
        const item = localStorage.getItem(key);
        console.log(key);
        const todoList = document.getElementsByClassName('todos_list');


        const todoItem = new createElement('li','class','todos_item',item);
        const div = new createElement('div','class','btn-wrap','');
        const finishBtn = new createElement('button','type','button','完了');
        finishBtn.classList.add('btn_finish');
        const delBtn = new createElement('button','type','button','削除');
        delBtn.classList.add('btn_delete');


        div.appendChild(finishBtn);
        div.appendChild(delBtn);
        todoItem.appendChild(div);
        todoList[0].appendChild(todoItem);
    }
}


// 追加
form.addEventListener('submit',save);

document.addEventListener('click',function(e){
    // 完了
    if(e.target.className === 'btn_finish'){
        e.target.closest('li').classList.add('done');
        // doneに表示させる
        const finishList = document.getElementsByClassName('finish_list');
        const finishItem = new createElement('li','class','finish_item',e.target.closest('li').firstChild.textContent);
        finishList[0].appendChild(finishItem);
    };
    // 削除
    if(e.target.className === 'btn_delete'){
        const List = document.querySelectorAll('.todos_item');
        console.log(List);
        const index = Array.from(List).indexOf(e.target.closest('li'));
        console.log(index);
        localStorage.removeItem(index);
    };
})

window.addEventListener('load',()=>{
    showToDo();
});

// localStorage.clear();