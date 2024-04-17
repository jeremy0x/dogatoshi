// AOS Config
AOS.init({
  duration: 3000,
  once: true,
});

// Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/hero-pattern.png')",
        'features-bg-pattern': "url('./assets/images/features-bg-pattern.png')",
        'gradient-pattern': "url('./assets/images/gradient-pattern.png')",
        'footer-bg-pattern': "url('./assets/images/footer-bg-pattern.png')",
      },
      fontFamily: {
        'titan-one': ['Titan One', 'sans-serif'],
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
    mobileNavbar.style.transform = 'translateX(0)';
  });

  closeButton.addEventListener('click', function () {
    mobileNavbar.style.transform = 'translateX(100%)';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileNavbar.style.transform = 'translateX(100%)';
    });
  });
});
