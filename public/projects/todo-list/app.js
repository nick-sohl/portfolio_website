const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" class="completedCheckbox">
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        const deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        const completedCheckbox = taskItem.querySelector('.completedCheckbox');
        completedCheckbox.addEventListener('change', () => {
            if (completedCheckbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
    }
});
