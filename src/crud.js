import ToDo from './todoList.js';
import DeleteButton from './delete-btn.png';

// Add functionality
export function add(value) {
  // Create new item
  const newItem = new ToDo(value);
  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(newItem.getList()));
}

// Remove Functionality
export function remove(index) {
  ToDo.list = ToDo.list.filter((item) => item !== ToDo.list[index]);
  // Update indexes
  ToDo.list.forEach((item, i) => {
    item.index = i;
  });
  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
}

export function edit(index, text) {
  ToDo.list[index].description = text;
  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
}

// Add items to UI
export function populateList() {
  // eslint-disable-next-line no-undef, no-unused-vars, no-useless-concat
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';

    listItem.innerHTML = `
    <input class="checkbox" type="checkbox">
    <span>${item.description}</span>
    <textarea class="text-area" maxlength="30">${item.description}</textarea>
    <img class="cancel-btn" src="${DeleteButton}">
    `;
    // eslint-disable-next-line no-undef, no-unused-vars, no-useless-concat
    todoList.appendChild(listItem);

    const checkbox = listItem.querySelector('input');
    const text = listItem.querySelector('span');
    const textInput = listItem.querySelector('textarea');
    const deleteButton = listItem.querySelector('img');

    // Update
    checkbox.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].update();
      text.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
    });

    // Edit functionality
    text.addEventListener('click', () => {
      text.style.display = 'none';
      textInput.classList.toggle('edit-item');
    });

    textInput.addEventListener('keydown', (e) => {
      // Follow value
      text.innerHTML = textInput.value;

      // Update list
      const index = parseInt(listItem.id, 10);
      edit(index, text.innerHTML);

      if (e.code === 'Enter') {
        // Update UI
        text.style.display = 'block';
        textInput.classList.toggle('edit-item');
      }
    });

    // Delete functionality
    deleteButton.addEventListener('click', () => {
      // Update list
      const index = parseInt(listItem.id, 10);
      // Delete item
      remove(index);
      // Update UI
      populateList();
    });

    if (item.complete) {
      checkbox.checked = true;
      text.classList = 'complete';
    }
  });
}

// Clear completed functionality
export function deleteAllCompleted(todo) {
  // Update list
  todo.list = todo.list.filter((item) => item.complete === false);
  // Update indexes
  todo.list.forEach((item, i) => {
    item.index = i;
  });
  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(todo.list));
}
