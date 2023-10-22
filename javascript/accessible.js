// Get all list items

const listItems = document.querySelectorAll('.dropdown-list li');

// Add click event listeners to each list item
listItems.forEach(item => {
    const toggle = item.querySelector('.dropdown-toggle');
    item.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the dropdown content
        item.classList.toggle('active');
    });
});