const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    // Toggle the type of the password field
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    // Toggle the eye icon
    this.src = type === 'password' ? 'eyeiconimage.png' : 'eyeiconimageclosed.png';
});
