const taskInput = document.querySelector('.task-input')
const addButton = document.querySelector('.add-button')
const tasksList = document.querySelector('.tasks-list')
const errorInfo = document.querySelector('.error-info')


const createTask = () => {
    if(taskInput.value != 0) {
        let info = document.createElement('li')
        info.value = taskInput.value

    } else {
        errorInfo.textContent = "Wpisz treść zadania"
    }
}




addButton.addEventListener('click', createTask)
