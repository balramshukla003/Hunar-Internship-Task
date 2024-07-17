document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple authentication logic
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        window.location.assign("https://www.google.co.uk/")
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
});
