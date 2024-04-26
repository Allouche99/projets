const items = document.getElementById('allItems');

function addItem(event) {
  event.preventDefault();
  const item = document.createElement('li');

  item.textContent = input.value;
  items.appendChild(item);
  input.value = '';
  item.className = 'groceryItem';

  item.addEventListener('click', function () {
    toggleLineThrough(item);
  });

  console.log(item);
}

function toggleLineThrough(item) {
  // Check if the item has the line-through style
  if (item.style.textDecoration === 'line-through') {
    // If it does, remove the style
    item.style.textDecoration = 'none';
  } else {
    // If it doesn't, apply the line-through style
    item.style.textDecoration = 'line-through';
  }
}

function clearForm() {
  items.innerHTML = '';
}

const form = document.getElementById('groceriesForm');
const input = document.getElementById('groceriesInput');
const clearIcon = document.getElementById('clearIcon');
const addIcon = document.getElementById('addIcon');

form.addEventListener('submit', addItem);
addIcon.addEventListener('click', addItem);
clearIcon.addEventListener('click', clearForm);
