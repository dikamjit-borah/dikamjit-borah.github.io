document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Reset form
    this.reset();
    
    alert('Message sent successfully!');
});


// Add this to your existing JavaScript
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Update aria-expanded
    const isExpanded = mainNav.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mainNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav') && !e.target.closest('.nav-toggle')) {
        navToggle.classList.remove('active');
        mainNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});