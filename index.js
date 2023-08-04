const signInButton = document.getElementById('signInButton');
const signInFormContainer = document.getElementById('signInFormContainer');
const closeFormButton = document.getElementById('closeFormButton');

signInButton.addEventListener('click', function() {
  signInFormContainer.style.right = '0';
});

const searchButton = document.getElementById('searchButton');
const searchBarContainer = document.getElementById('searchBarContainer');


searchButton.addEventListener('click', function() {
  searchBarContainer.style.right = '0';
});

