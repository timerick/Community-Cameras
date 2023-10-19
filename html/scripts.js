function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function dismissCookiePopup() {
  // Set a cookie to remember user's consent for 30 days (you can adjust the number of days)
  setCookie("cookieConsent", "true", 30);
  
  // Hide the cookie popup
  document.querySelector(".cookie-popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  // Check if the user has previously accepted cookies
  var cookieConsent = getCookie("cookieConsent");
  if (!cookieConsent) {
      // If not, show the cookie consent popup
      document.querySelector(".cookie-popup").style.display = "block";
  }
});

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}
