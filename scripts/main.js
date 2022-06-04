// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

(function() {
  'use strict';

  function trackScroll() {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // setTimeout(backToTop, 0);
    }
  }

  const goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
