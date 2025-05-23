// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple success message
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = 'Your message has been sent successfully! Thank you for reaching out.';
    responseMessage.style.color = '#4CAF50'; // Success color

    // Clear form after submission
    document.getElementById('contact-form').reset();
});
// Get references to the menu icon and navbar
const menuIcon = document.getElementById('menu');
const navbar = document.getElementById('navbar');

// Add event listener to the menu icon to toggle the navbar
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggles the 'active' class to show/hide navbar
});
