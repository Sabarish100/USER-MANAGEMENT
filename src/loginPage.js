// Selecting the form elements
const usernameField = document.getElementById('usernameFieldId');
const passwordField = document.getElementById('passwordFieldId');
const loginButton = document.querySelector('.btn');
const errorMessage = document.querySelector('.errorMessage');

// Function to handle the login request
async function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  const username = usernameField.value;
  const password = passwordField.value;

  // Validate inputs
  if (!username || !password) {
    errorMessage.textContent = "Both fields are required!";
    return; //
  }

  // Make the login request using fetch
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle successful login (e.g., redirect or show a success message)
      console.log('Login successful:', data);
      errorMessage.textContent = ''; // Clear any previous error
    
      // Create a popup message
      const popup = document.createElement('div');
      popup.textContent = 'Login successful!';
      popup.style.position = 'fixed';
      popup.style.top = '10px';
      popup.style.left = '50%';
      popup.style.transform = 'translateX(-50%)';
      popup.style.backgroundColor = '#7DF9FF';
      popup.style.color = 'black';
      popup.style.padding = '10px 20px';
      popup.style.borderRadius = '5px';
      popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      popup.style.zIndex = '1000';
      popup.style.fontSize = '16px';
    
      document.body.appendChild(popup);
    
      // Remove the popup after 2 seconds
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 2000);
    
      // Redirect to dashboard
      setTimeout(function() {
        window.location.href = './src/postLogin.html'; // Redirects to dashboard after 2 Seconds
    }, 2000);
      
    } else {
      // Handle error (incorrect credentials)
      errorMessage.textContent = data.message || 'Login failed. Please try again.';
    }
    
  } catch (error) {
    console.error('Error:', error);
    errorMessage.textContent = 'An error occurred. Please try again.';
  }
}

// Add event listener to the login button
loginButton.addEventListener('click', handleLogin);
