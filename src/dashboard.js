document.addEventListener("DOMContentLoaded", (event) => {
    //Fetching User Datas
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data.users))
    .catch(error => console.error('Error fetching users:', error));

    function displayUsers(users) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear any existing content
      
        users.forEach(user => {
          // Create a container for each user
          const userCard = document.createElement('div');
          userCard.className = 'user-card';
      
          // Add user image
          const userImage = document.createElement('img');
          userImage.src = user.image;
          userImage.alt = `${user.firstName} ${user.lastName}`;
          userCard.appendChild(userImage);
      
          // Add user name
          const userName = document.createElement('h2');
          userName.textContent = `${user.firstName} ${user.lastName}`;
          userCard.appendChild(userName);
      
          // Add user email
          const userEmail = document.createElement('p');
          userEmail.textContent = `Email: ${user.email}`;
          userCard.appendChild(userEmail);
      
          // Add user phone
          const userPhone = document.createElement('p');
          userPhone.textContent = `Phone: ${user.phone}`;
          userCard.appendChild(userPhone);
      
          // Append the user card to the user list
          userList.appendChild(userCard);
        });
      };
      fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => displayUsers(data.users))
      .catch(error => {
        console.error('Error fetching users:', error);
        const userList = document.getElementById('user-list');
        userList.innerHTML = '<p>Failed to load user data. Please try again later.</p>';
      });

const userId = 1; // Replace with the actual logged-in user's ID

fetch(`https://dummyjson.com/users/${userId}`)
  .then(response => response.json())
  .then(user => {
    // Update the profile image
    const profileImage = document.querySelector('.left-side img');
    profileImage.src = user.image;
    profileImage.alt = `${user.firstName} ${user.lastName}`;

    // Optionally, update the welcome message
    const welcomeMessage = document.querySelector('.left-side p');
    welcomeMessage.textContent = `Welcome, ${user.firstName} ${user.lastName}.`;
  })
  .catch(error => console.error('Error fetching user data:', error));

    
      

});