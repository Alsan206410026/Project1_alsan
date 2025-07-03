
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

// Dark Mode Toggle Function
function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector('.mode-toggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    button.innerHTML = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    button.innerHTML = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const darkMode = localStorage.getItem('darkMode');
  const button = document.querySelector('.mode-toggle');
  
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    button.innerHTML = '☀️ Light Mode';
  }
});
