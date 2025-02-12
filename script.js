/*************  ✨ Codeium Command 🌟  *************/
// Close the dropdown when clicking outside
// This code adds an event listener to the document that listens for a click event.
// When a click event occurs, it checks if the target of the event (the element that was clicked)
// is not the menu icon and is not a child of the nav ul (the dropdown menu).
// If the target is not the menu icon and is not a child of the nav ul,
// then it sets the checked property of the menu toggle to false, effectively closing the dropdown menu.
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    if (event.target !== menuIcon && !navUl.contains(event.target)) {
        menuToggle.checked = false;
    }
});
document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation();
});
/******  09c17c86-bb07-4e11-acec-15744499ebe8  *******/