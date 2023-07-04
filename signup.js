document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    function handleSignup(event) {
        event.preventDefault();
    // Retrieve form input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contact-number').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var password = document.getElementById('password').value;
  
    // Perform form validation
    if (username.trim() === '') {
      alert('Please enter your username.');
      return;
    }
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    if (contactNumber.trim() === '') {
      alert('Please enter your contact number.');
      return;
    }
    if (!gender) {
      alert('Please select your gender.');
      return;
    }
    if (password.trim() === '') {
      alert('Please enter your password.');
      return;
    }
    var message = "Signup successful. Username: " + username + ", Password: " + password;
  document.getElementById('message').textContent = message;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Contact Number:', contactNumber);
    console.log('Gender:', gender);
    console.log('Password:', password);
  
    var signupUrl = 'http://your-backend-api/signup';
    var signupData = {
        username: username,
        email: email,
        password: password  
    axios.post(signupUrl, signupData)
    .then(function(response) {
        // Handle the response from the backend
        console.log(response.data);
        // Redirect to the login page or perform other actions
    })
    .catch(function(error) {
        // Handle the error
        console.log(error);
    });
    // Clear the form
    document.getElementById('signup-form').reset();
  });
  function handleLogin
