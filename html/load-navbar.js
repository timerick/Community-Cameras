// Load navbar.html and inject it into the page
document.addEventListener('DOMContentLoaded', function() {
  fetch('/navbar.html')
    .then(response => response.text())
    .then(html => {
      // Insert navbar at the beginning of body
      document.body.insertAdjacentHTML('afterbegin', html);
      
      // Hide the nav link for the current page
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const navLinks = document.querySelectorAll('.navbar-nav a');
      
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || 
            (currentPath === '/' && linkPath === '/index') ||
            (currentPath.endsWith(linkPath))) {
          link.closest('li').style.display = 'none';
        }
      });
    })
    .catch(error => console.error('Error loading navbar:', error));
});
