// scripts.js

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.classList.add('update');
    updateButton.addEventListener('click', function() {
        const newTaskText = prompt('Update task:', taskTextSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskTextSpan.textContent = newTaskText.trim();
        }
    });

    listItem.appendChild(taskTextSpan);
    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}
