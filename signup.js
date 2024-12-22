// JavaScript to validate form and handle password confirmation
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to handle validation first

    // Clear previous message
    document.getElementById('formMessage').textContent = '';

    // Get form elements
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('new-email').value.trim();
    const contactNumber = document.getElementById('contact-number').value.trim();
    const address = document.getElementById('address').value.trim();
    const sportClub = document.getElementById('sport-club').value.trim();
    const membershipPlan = document.getElementById('membership-plan').value.trim();
    const password = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Validate if required fields are filled out
    if (!fullName || !email || !contactNumber || !address || !sportClub || !membershipPlan || !password || !confirmPassword) {
        document.getElementById('formMessage').textContent = 'Please fill out all required fields.';
        return;
    }

    // Validate if password and confirm password match
    if (password !== confirmPassword) {
        document.getElementById('formMessage').textContent = 'Passwords do not match.';
        return;
    }

    // Submit form if validation is successful (for demo, we'll just display a success message)
    alert('Form submitted successfully!');
});

// Toggle password visibility
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const eyeIcon = document.getElementById(`eye-icon-${id}`); // Update the reference to use the correct eye icon ID
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'eyeiconimage.png'; // Change icon to "open eye"
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'eyeiconimageclosed.png'; // Change icon to "closed eye"
    }
}
