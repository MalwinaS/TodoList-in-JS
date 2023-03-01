let taskInput;
let errorInfo;
let addButton;
let ulList;
let newTodo;
let allTask;
let popup;
let popupInfo;
let taskToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    taskInput = document.querySelector('.task-input');
    errorInfo = document.querySelector('.error-info');
    addButton = document.querySelector('.add-button');
    ulList = document.querySelector('.todolist ul');
    allTask = document.getElementsByTagName('li')
    popupEdit = document.querySelector('.popup-edit');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    addButton.addEventListener('click', createTask);
    taskInput.addEventListener('keyup', enterCheck);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
}

const createTask = () => {
    if(taskInput.value !== '') {
        idNumber++;
        newTodo = document.createElement('li');
        newTodo.innerText = taskInput.value;

        createToolsArea();
        ulList.appendChild(newTodo);
        taskInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = "Wpisz treść zadania";
    }
}

const enterCheck = () => {
    if (event.keyCode === 13) {
        createTask();
    }
}

const createToolsArea = () => {
    const tools = document.createElement('div');
    tools.classList.add('tools');
    newTodo.appendChild(tools);
    let btnComplete = document.createElement('button');
    btnComplete.classList.add('done-button');
    btnComplete.innerHTML = '<i class="fas fa-check"></i>';
    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-button');
    btnEdit.textContent = 'EDIT';
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('remove-button');
    btnDelete.innerHTML = '<i class="fas fa-times"></i>';
    tools.append(btnComplete, btnEdit, btnDelete);
}

const checkClick = e => {
    if(e.target.classList.value !== '') {
        if(e.target.closest('button').classList.contains('done-button')) {
            e.target.closest('li').classList.toggle('complete')
            e.target.closest('button').classList.toggle('complete')
        } else if (e.target.closest('button').classList.contains('edit-button')){
            editTask(e);
        } else if (e.target.closest('button').classList.contains('remove-button')){
            deleteTask(e);
        }
    }
}

const deleteTask = e => {
    const deleteTask = e.target.closest('li');
    deleteTask.remove();
    if(allTask.length === 0) {
        errorInfo.innerHTML = "Brak zadań na liście"
    }
}

const editTask = e => {
    taskToEdit = e.target.closest('li');
    popupInput.value = taskToEdit.firstChild.textContent;
    popupEdit.style.display = 'flex';
}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        taskToEdit.firstChild.textContent = popupInput.value;
        popupEdit.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'Musisz podac jakas tresc';
    }
}

const closePopup = () => {
    popupEdit.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', main);
