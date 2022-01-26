const createBtn = document.getElementsByClassName('createToDo');

const formArea = document.getElementsByClassName('create');

const bgArea = document.getElementsByClassName('bg');


function clicked() {
    bgArea.style = 'display:block';
    formArea.style = 'display:block';
    console.log('clicked!');
}
