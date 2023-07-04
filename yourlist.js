let tasks = [];

function handleFormSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('todo-title').value;
  const description = document.getElementById('todo-description').value;
  const datetime = new Date().toLocaleString();
  const task = { title, description, datetime, completed: false };
  tasks.push(task);
  document.getElementById('todo-title').value = '';
  document.getElementById('todo-description').value = '';
  updateTaskLists();
}

function updateTaskLists() {
  const pendingList = document.getElementById('pending-list');
  const completedList = document.getElementById('completed-list');

  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.title + ' - ' + task.description + ' (' + task.datetime + ')';

    if (task.completed) {
      listItem.classList.add('completed');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(index, 'completed'));
      listItem.appendChild(deleteButton);
      completedList.appendChild(listItem);
    } else {
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', () => completeTask(index));
      listItem.appendChild(completeButton);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editTask(index));
      listItem.appendChild(editButton);

      pendingList.appendChild(listItem);
    }
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  updateTaskLists();
}

function deleteTask(index, listType) {
  tasks.splice(index, 1);
  updateTaskLists();
}

function editTask(index) {
  const newTitle = prompt('Enter a new title:');
  if (newTitle !== null) {
    tasks[index].title = newTitle;
    updateTaskLists();
  }
}

document.getElementById('todo-form').addEventListener('submit', handleFormSubmit);
