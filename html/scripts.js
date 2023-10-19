document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has previously accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
      // If not, show the cookie consent popup
      document.querySelector(".cookie-popup").style.display = "block";
    }
  });
  
  function dismissCookiePopup() {
    // Dismiss the cookie popup and store user's consent
    document.querySelector(".cookie-popup").style.display = "none";
    localStorage.setItem("cookieConsent", "true");
  }
  