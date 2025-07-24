// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const menuOverlay = document.getElementById('menu-overlay');

  // Toggle menu function
  function toggleMenu() {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close menu function
  function closeMenu() {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Hamburger button click
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleMenu);
  }

  // Overlay click to close menu
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking nav links
  const navLinkItems = navLinks.querySelectorAll('li a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on window resize if screen becomes large
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
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