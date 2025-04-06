/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
// Scripts

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Dark Mode Toggle
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    function setDarkMode(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        htmlElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');

        // Update the toggle button's innerHTML with the appropriate icon
        toggleBtn.innerHTML = isDark 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';

        localStorage.setItem('dark-mode', isDark);
    }

    // Set initial state based on localStorage
    const isDark = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(isDark);

    toggleBtn.addEventListener('click', () => {
        const isDarkNow = !document.body.classList.contains('dark-mode');
        setDarkMode(isDarkNow);
    });
});