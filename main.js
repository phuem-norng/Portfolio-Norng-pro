// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navList && navList.classList.contains('active') && 
            !e.target.closest('.nav') && 
            !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});