<script>
        function addTask(event) {
            event.preventDefault();
            var taskInput = document.getElementById('task-input');
            var taskDescription = taskInput.value;
            if (taskDescription.trim() === '') {
                alert('Please enter a task description.');
                return;
            }
            var newTask = document.createElement('li');
            newTask.textContent = taskDescription;
            document.getElementById('new-tasks').appendChild(newTask);
            taskInput.value = '';
        }

        var taskForm = document.getElementById('task-form');
        taskForm.addEventListener('submit', addTask);
    </script>