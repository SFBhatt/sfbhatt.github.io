// Toggle the dropdown menu when clicking the menu icon
document.querySelector('.menu-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.checked = !menuToggle.checked; // Toggle the checkbox state
});

// Close the dropdown when clicking outside
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    // Close the menu if the click is outside the menu and menu icon
    if (event.target !== menuIcon && !navUl.contains(event.target)) {
        menuToggle.checked = false;
    }
});