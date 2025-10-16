document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.querySelector(".brand-logos");
    // Add or Remove Logo Ads Here
    if (logoContainer) {
        const logoAds = [
            { link: "https://www.facebook.com/KTKCreston", img: "images/logoads/KTKEthnicFoodsCrestonLogo.png", alt: "KTK Ethnic Foods Creston Logo" },
            { link: "https://www.levelupmobilearcade.ca/", img: "images/logoads/LvlUpLogoAd.png", alt: "Level Up Mobile Arcade Logo" },
            { link: "https://www.facebook.com/eb.window.cleaning.2024", img: "images/logoads/EBWindowCleaning.jpg", alt: "EB Window Cleaning" },
            { link: "https://www.lilyandaven.com/", img: "images/logoads/lilyandaven.png", alt: "Lily & Aven" },
            { link: "https://reconnecttech.ca/internet", img: "images/ReConnectInternet_PrimaryLogo-01.jpg", alt: "ReConnect Tech Inc." }
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