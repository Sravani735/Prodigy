// script.js
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const protectedRoute = document.getElementById('protected');

// Register functionality
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (data.success) {
            alert('Registration successful!');
            // Redirect to login page
            window.location.href = '#login';
        } else {
            alert('Registration failed!');
        }
    } catch (error) {
        console.error(error);
    }