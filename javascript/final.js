// Get all list items
const listItems = document.querySelectorAll('.dropdown-list li');

// Add click event listeners to each list item
listItems.forEach(item => {
    const toggle = item.querySelector('.dropdown-toggle');

    // Add a click event listener
    item.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the dropdown content
        item.classList.toggle('active');
    });

    // Add a keydown event listener for accessibility
    item.addEventListener('keydown', event => {
        // Check if the "Enter" key is pressed
        if (event.key === 'Enter') {
            // Toggle the 'active' class to show/hide the dropdown content
            item.classList.toggle('active');
        }
    });
});
