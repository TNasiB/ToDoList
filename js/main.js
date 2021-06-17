const input = document.querySelector('.toDo__input'),
      btn = document.querySelector('.toDo__add-btn'),
      table = document.querySelector('.toDo__left');

btn.addEventListener('click', ()=> {
    let neededTask = input.value;
    if (neededTask.length > 20) {
        alert('Input not more twenty simbols');
        input.value = '';
        return;
    }
    if (neededTask.length == '') {
        alert('Please, enter the data');
        return;
    }
    console.log(neededTask.lenght);
    addTask(neededTask);
    input.value = '';
});

function addTask(task) {
    table.innerHTML += `
        <p class="toDo__task">${task}</p>
    `;
}