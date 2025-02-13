// Toggle the dropdown menu when clicking or touching the menu icon
function toggleMenu(event) {
    event.stopPropagation(); // Prevent the event from propagating to the document
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.checked = !menuToggle.checked; // Toggle the checkbox state
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('touchstart', toggleMenu);

// Close the dropdown when clicking outside
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    // Close the menu if the click is outside the menu and menu icon
    if (event.target !== menuIcon && !navUl.contains(event.target)) {
        menuToggle.checked = false;
    }
});