// Load navbar.html and inject it into the page
document.addEventListener('DOMContentLoaded', function() {
  const navbarController = new AbortController();
  const navbarTimeout = setTimeout(() => navbarController.abort(), 5000); // 5 second timeout
  
  fetch('/navbar.html', { signal: navbarController.signal })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      clearTimeout(navbarTimeout);
      
      // Validate that we got actual HTML
      if (!html || !html.includes('navbar')) {
        throw new Error('Invalid navbar HTML received');
      }
      
      // Insert navbar at the beginning of body
      document.body.insertAdjacentHTML('afterbegin', html);
      console.log('✓ Navbar loaded successfully');
      
      // Hide the nav link for the current page
      const currentFile = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.navbar-nav a');
      
      navLinks.forEach(link => {
        const linkFile = link.getAttribute('href').split('/').pop();
        if (linkFile === currentFile) {
          link.closest('li').style.display = 'none';
        }
      });
    })
    .catch(error => {
      clearTimeout(navbarTimeout);
      console.error('✗ Error loading navbar:', error);
      
      // Show user-visible error message
      const errorDiv = document.createElement('div');
      errorDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #dc3545;
        color: white;
        padding: 12px 20px;
        font-size: 14px;
        z-index: 9999;
        font-family: Arial, sans-serif;
      `;
      errorDiv.innerHTML = `
        ⚠️ Navigation menu failed to load. 
        <a href="javascript:location.reload()" style="color: #fff; text-decoration: underline;">Refresh page</a>
      `;
      document.body.insertAdjacentElement('afterbegin', errorDiv);
      
      // Log detailed error info
      console.error('Navbar fetch failed:');
      console.error('  - Error type:', error.name);
      console.error('  - Error message:', error.message);
      console.error('  - Current URL:', window.location.href);
    });
});
