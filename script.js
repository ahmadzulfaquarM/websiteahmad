// Function to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Display a confirmation message (You can replace this with actual form submission logic later)
        alert(`Thank you for your message, ${formData.name}! We will get back to you shortly.`);

        // Reset the form fields
        form.reset();
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('#navList a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});