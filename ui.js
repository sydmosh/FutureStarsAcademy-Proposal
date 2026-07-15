// ui.js – UI enhancements for the proposal site
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Back to top button
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        backBtn.style.display = 'block';
      } else {
        backBtn.style.display = 'none';
      }
    };
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
