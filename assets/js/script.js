AOS.init({
  duration: 3000,
  once: true,
  mobile: false,
});

tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/hero-pattern.png')",
        'features-bg-pattern': "url('./assets/images/features-bg-pattern.png')",
      },
      fontFamily: {
        'titan-one': ['Titan One', 'sans-serif'],
      },
    },
  },
};
