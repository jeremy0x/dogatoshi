// AOS Config
AOS.init({
  duration: 1500,
  once: true,
  startEvent: 'load',
});

// Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/hero-pattern.jpg')",
        'features-bg-pattern': "url('./assets/images/features-bg-pattern.png')",
        'gradient-pattern': "url('./assets/images/gradient-pattern.png')",
        'footer-bg-pattern': "url('./assets/images/footer-bg-pattern.png')",
      },
      fontFamily: {
        'titan-one': ['Titan One', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xsm: '475px',
      },
    },
  },
};

// Mobile Navigation Menu
document.addEventListener('DOMContentLoaded', function () {
  const mobileNavbar = document.getElementById('mobile-navbar');
  const openButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-button');
  const navLinks = document.querySelectorAll('#mobile-navbar a');

  openButton.addEventListener('click', function () {
    mobileNavbar.style.transform = 'translateY(0)';
  });

  closeButton.addEventListener('click', function () {
    mobileNavbar.style.transform = 'translateY(-100%)';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileNavbar.style.transform = 'translateY(-100%)';
    });
  });
});

// Preloader
const removePreloader = () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.transform = 'translateY(-100%)';
    preloader.style.opacity = '0';
  }, 1000);
};

if (window.innerWidth < 1024) {
  document.addEventListener('DOMContentLoaded', removePreloader);
} else {
  window.addEventListener('load', removePreloader);
}
