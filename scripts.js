    const navToggle = document.getElementById('nav-toggle');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    document.addEventListener('click', function(event) {
      // Check if click is outside the hamburger, nav, and toggle
      const isClickInsideNav = nav.contains(event.target);
      const isClickInsideHamburger = hamburger.contains(event.target);
      const isClickInsideToggle = navToggle.contains(event.target);

      // Close menu if clicked outside
      if (!isClickInsideNav && !isClickInsideHamburger && !isClickInsideToggle) {
        navToggle.checked = false;
      }
    });

    // OPEN LIGHTBOX
document.querySelectorAll('.card-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.classList.add('is-open');
  });
});

// CLOSE LIGHTBOX (click overlay or close link)
document.querySelectorAll('.lightbox').forEach(box => {
  box.addEventListener('click', e => {
    if (e.target === box || e.target.classList.contains('lightbox-close')) {
      box.classList.remove('is-open');
    }
  });
});
