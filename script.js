document.getElementById('changeContentButton').addEventListener('click', function() {
  const mainContent = document.querySelector('main .main-content p');
  mainContent.textContent = 'CodeLand offers tutorials on HTML, CSS, JavaScript, and more!';
});

const users = ["Alice", "Bob", "Charlie", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

function populateUserList() {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; // Clear any existing list items
  users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user;
      userList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', populateUserList);
