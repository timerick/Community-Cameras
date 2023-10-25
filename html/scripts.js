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

// Get the iframe element
var videoFrame = document.getElementById('videoFrame');

// Wait for the iframe to be completely loaded
/*videoFrame.onload = function() {
    // Get the content document of the iframe
    var iframeDocument = videoFrame.contentDocument || videoFrame.contentWindow.document;

    // Set a timeout for 30 minutes (30 minutes * 60 seconds * 1000 milliseconds)
    var timeoutInMilliseconds = 1 * 60 * 1000;
    setTimeout(function () {
        // Pause the video inside the iframe
        iframeDocument.postMessage('pause', '*');

        // Show a popup
        var isStillWatching = confirm("Are you still watching?");
        if (isStillWatching) {
            // Resume the video if the user confirms they are still watching
            iframeDocument.postMessage('play', '*');
        } else {
            // Handle the case where the user chooses not to continue watching
            // You can perform actions like redirecting to another page or closing the player.
        }
    }, timeoutInMilliseconds);
};*/

        // Get the iframe element
        var iframe = document.getElementById("videoFrame");

        // Wait for the iframe content to load
        iframe.onload = function() {
            // Access the video element inside the iframe
            var video = iframe.contentDocument.getElementById("player_html5_api"); // Replace "your-video-element-id" with the actual ID of your video element

            // Set a timeout to pause the video after 1 minute (60,000 milliseconds)
            setTimeout(function() {
                video.pause();
            }, 10000); // 60000 milliseconds = 1 minute
        };