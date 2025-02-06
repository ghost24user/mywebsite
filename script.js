// JavaScript to trigger fade-in animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  console.log("Landing page loaded successfully.");

  const services = document.querySelectorAll('.service');
  const portfolio = document.querySelector('.portfolio');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  services.forEach((service) => {
    observer.observe(service);
  });

  observer.observe(portfolio);
});
