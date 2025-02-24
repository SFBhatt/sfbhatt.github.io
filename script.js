// Toggle the dropdown menu when clicking or touching the menu icon
function toggleMenu(event) {
    event.stopPropagation(); // Prevent the event from propagating to the document
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.checked = !menuToggle.checked; // Toggle the checkbox state
}

const menuIcon = document.querySelector('.menu-icon');

// Add event listeners for both click and touchstart
menuIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevent default touch behavior
    toggleMenu(event);
});

// Close the dropdown when clicking or touching outside
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    // Close the menu if the click is outside the menu and menu icon
    if (event.target !== menuIcon && !navUl.contains(event.target)) {
        menuToggle.checked = false;
    }
});

// Handle touch events outside the menu
document.addEventListener('touchstart', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    // Close the menu if the touch is outside the menu and menu icon
    if (event.target !== menuIcon && !navUl.contains(event.target)) {
        menuToggle.checked = false;
    }
});