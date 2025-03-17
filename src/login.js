// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }
    
    // Process login (this is just a placeholder, replace with actual login logic)
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login successful!');
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }
});