document.addEventListener('DOMContentLoaded', function() {
    // Get references to the navigation toggle button and the menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu'); // Target the ul with class nav-menu

    // Add event listener to the toggle button
    navToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle('active');
        // Optional: Toggle an icon for the button (e.g., bars <-> times)
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Optional: Close the menu when a link is clicked (useful for single-page sites)
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the menu is active (open)
            if (navMenu.classList.contains('active')) {
                // Remove the 'active' class to close the menu
                navMenu.classList.remove('active');
                 // Reset the icon back to bars
                const icon = navToggle.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
        });
    });

});