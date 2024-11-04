let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || []; 

function createListItem(itemText, index) {
    const listItem = document.createElement('li');

    const itemSpan = document.createElement('span');
    itemSpan.textContent = itemText;

    // Create purchased icon
    const purchasedIcon = document.createElement('span');
    purchasedIcon.textContent = '✔️';
    purchasedIcon.className = 'icon';
    purchasedIcon.onclick = function() {
        itemSpan.classList.toggle('purchased');
        saveToLocalStorage(); // Update local storage on purchase status change
    };

    

    // Append elements to the list item
    listItem.appendChild(itemSpan);
    listItem.appendChild(purchasedIcon);
   
    return listItem;
}

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        shoppingList.push(itemText); // Add item to the array
        renderList(); // Update the displayed list
        itemInput.value = ''; // Clear the input
    }
}

function removeItem(index) {
    shoppingList.splice(index, 1); // Remove item from the array
    renderList(); // Update the displayed list
}

function renderList() {
    const shoppingListElement = document.getElementById('shoppingList');
    shoppingListElement.innerHTML = ''; // Clear existing list

    shoppingList.forEach((itemText, index) => {
        const listItem = createListItem(itemText, index);
        shoppingListElement.appendChild(listItem);
    });

    saveToLocalStorage(); // Save updated list to local storage
}

function clearList() {
    shoppingList = []; // Clear the array
    renderList(); // Update the displayed list
}

function saveToLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList)); // Save the array to local storage
}

// Initial render of the shopping list from local storage
renderList();

// Event listeners
document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
document.getElementById('clearButton').addEventListener('click', clearList); // Clear list button
