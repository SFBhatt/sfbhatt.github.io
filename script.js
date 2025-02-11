// Close the dropdown when clicking outside
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    if (event.target !== menuIcon && !navUl.contains(event.target)) {
        menuToggle.checked = false;
    }
});