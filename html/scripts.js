var cookieConsent = getCookie("cookieConsent");
if (cookieConsent) {
  document.addEventListener("DOMContentLoaded", function () {
    var cookiePopup = document.querySelector(".cookie-popup");
    cookiePopup.style.display = "none";
  });
}
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

function handleVideoPlayback() {
  // Get the iframe element
  var iframe = document.getElementById("videoFrame");

  // Access the video element inside the iframe
  var video = iframe.contentDocument.getElementById("player_html5_api"); // Replace "your-video-element-id" with the actual ID of your video element

  // Function to handle the timer and confirmation dialog
  function startTimer() {
    // Set a timeout to display the confirmation dialog after 1 minute (60,000 milliseconds)
    setTimeout(function () {
      // Pause the video
      video.pause();

      // Ask for confirmation
      var userConfirmation = window.confirm("Are you still watching?");

      // If the user clicks "OK", resume playing the video and start the timer again
      if (userConfirmation) {
        video.play();
        startTimer(); // Start the timer again
      }
    }, 900000); // 60000 milliseconds = 1 minute
  }
  startTimer();
}   