// JavaScript to trigger animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  console.log("Landing page loaded successfully.");

  const services = document.querySelectorAll('.service');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-left', 'animate-right');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  services.forEach((service, index) => {
    if (index % 2 === 0) {
      service.classList.add('animate-left');
    } else {
      service.classList.add('animate-right');
    }
    observer.observe(service);
  });
});
