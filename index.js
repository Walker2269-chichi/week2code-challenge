function createListItem(itemText) {
    const listItem = document.createElement('li');

    const itemSpan = document.createElement('span');
    itemSpan.textContent = itemText;

    // Create purchased icon
    const purchasedIcon = document.createElement('span');
    purchasedIcon.textContent = '✔️';
    purchasedIcon.className = 'icon';
    purchasedIcon.onclick = function() {
        itemSpan.classList.toggle('purchased');
    };

    // Create underline effect to remove the item
    itemSpan.className = 'remove';
    itemSpan.onclick = function() {
        removeItem(listItem);
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
        const listItem = createListItem(itemText);
        document.getElementById('shoppingList').appendChild(listItem);
        itemInput.value = ''; // Clear the input
    }
}

// Function to remove an item
function removeItem(listItem) {
    document.getElementById('shoppingList').removeChild(listItem);
}

// Function to clear the shopping list
function clearList() {
    const shoppingList = document.getElementById('shoppingList');
    shoppingList.innerHTML = ''; // Clear all items
}

// Event listeners
document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
document.getElementById('clearButton').addEventListener('click', clearList); // Clear list button