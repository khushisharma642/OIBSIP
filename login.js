document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
  
    // Here you would typically make an AJAX request to a backend server to handle the login process and authenticate the user.
    // For simplicity, let's just display the entered details in the message div.
    var message = "Login successful. Username: " + username + ", Password: " + password;
    document.getElementById('message').textContent = message;
  });
function redirectToYourList() {
    // Perform login authentication
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login authentication
    if (username === 'your_username' && password === 'your_password') {
      // Redirect to yourlist.html after successful login
      window.location.href = 'yourlist.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  