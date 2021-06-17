const input = document.querySelector('.toDo__input'),
      btn = document.querySelector('.toDo__add-btn'),
      table = document.querySelector('.toDo__left'),
      completedTasks = document.querySelector('.toDo__right');

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
    addTask(neededTask);
    input.value = '';
});

table.addEventListener('click', (e)=> {
    if (e.target.nodeName == 'SPAN') {
        let newText = e.target.parentElement.textContent.slice(0, -1);
        completedTasks.innerHTML += `
            <p class="toDo__task completed">${newText}</p>
        `;
        e.target.parentNode.remove();
    }
});

function addTask(task) {
    table.innerHTML += `
        <p class="toDo__task">${task}<span>☑</span></p>
    `;
}

