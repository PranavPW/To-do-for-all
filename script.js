document.getElementById('addTodo').addEventListener('click', function () {
      const todoInput = document.getElementById('todoInput');
      const todoText = todoInput.value.trim();

      if (todoText !== '') {
        const todoList = document.getElementById('todoList');

        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', function () {
          todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';
      }
    });

    document.getElementById('todoInput').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        document.getElementById('addTodo').click();
      }
    });
