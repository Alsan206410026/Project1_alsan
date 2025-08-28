// Hamburger Menu Toggle for mobile nav
var toggleButton = document.getElementById('menu-toggle');
var navLinks = document.querySelector('nav');
var menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
  navLinks.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
function closeMenu() {
  navLinks.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
if (toggleButton) {
  toggleButton.addEventListener('click', toggleMenu);
}
if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}
// Close menu when clicking nav links
if (navLinks) {
  var navLinkItems = navLinks.querySelectorAll('a');
  navLinkItems.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
}
// Close menu on window resize if screen becomes large
window.addEventListener('resize', function() {
  if (window.innerWidth > 1043) {
    closeMenu();
  }
});

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}
// On page load, set dark mode if previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}
