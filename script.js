const hamburger = document.getElementById('hamburger');
const navLinkss = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinkss.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Smooth scroll behavior
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

