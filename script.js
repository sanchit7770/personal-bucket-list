function addItem() {
    const input = document.getElementById('new-item');
    const newItemText = input.value.trim();

    if (newItemText !== '') {
        const ul = document.getElementById('bucket-list');
        const li = document.createElement('li');

        li.innerHTML = `<span class="icon">⭐</span> ${newItemText} <button class="mark-completed" onclick="markCompleted(this)">Mark Completed</button> <button onclick="deleteItem(this)">Delete</button>`;
        ul.appendChild(li);
        input.value = '';
    }
}

function deleteItem(button) {
    const li = button.parentElement;
    li.remove();
}

function markCompleted(button) {
    const li = button.parentElement;
    li.classList.add('completed');
    li.querySelector('.icon').textContent = '✔️';
    button.remove();
}
