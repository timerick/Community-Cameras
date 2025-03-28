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

/* document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.querySelector(".brand-logos");
  // Add or Remove Logo Ads Here
  if (logoContainer) {
      const logoAds = [
          { link: "https://www.facebook.com/KTKCreston", img: "images/logoads/KTKEthnicFoodsCrestonLogo.png", alt: "KTK Ethnic Foods Creston Logo" },
          { link: "https://www.levelupmobilearcade.ca/", img: "images/logoads/LvlUpLogoAd.png", alt: "Level Up Mobile Arcade Logo" },
          { link: "https://www.facebook.com/eb.window.cleaning.2024", img: "images/logoads/EBWindowCleaning.jpg", alt: "EB Window Cleaning" },
          { link: "https://www.lilyandaven.com/", img: "images/logoads/lilyandaven.png", alt: "Lily & Aven" },
          { link: "https://reconnecttech.ca/", img: "images/ReConnectTech_PrimaryLogo-01.jpg", alt: "ReConnect Tech Inc." }
      ];
      
      // Shuffle the logos using Fisher-Yates algorithm and pick 4
      for (let i = logoAds.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [logoAds[i], logoAds[j]] = [logoAds[j], logoAds[i]];
      }
      const selectedLogos = logoAds.slice(0, 4);
      
      // Clear and populate randomized logos
      logoContainer.innerHTML = "";
      selectedLogos.forEach(logo => {
          const a = document.createElement("a");
          a.href = logo.link;
          a.target = "_blank";
          
          const img = document.createElement("img");
          img.src = logo.img;
          img.alt = logo.alt;
          
          a.appendChild(img);
          logoContainer.appendChild(a);
      });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const logoContainer = document.getElementById('logo-container');

  // Array of logo ad URLs or paths
  const logos = [
      'logo1.png',
      'logo2.png',
      'logo3.png',
      'logo4.png',
      'logo5.png',
      'logo6.png',
      'logo7.png',
      'logo8.png',
      'logo9.png',
      'logo10.png'
  ];

  // Function to get 4 random, non-duplicate logos
  function getRandomLogos() {
      const shuffledLogos = logos.sort(() => 0.5 - Math.random());
      return shuffledLogos.slice(0, 4);
  }

  // Display the random logos
  function displayLogos() {
      const selectedLogos = getRandomLogos();
      selectedLogos.forEach(logo => {
          const img = document.createElement('img');
          img.src = logo;
          logoContainer.appendChild(img);
      });
  }

  displayLogos();
}); */
