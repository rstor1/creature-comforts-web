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