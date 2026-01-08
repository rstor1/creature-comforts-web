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

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");

  let unlocked = false;

  function unlockAudio() {
    if (!unlocked) {
      audio.load(); // required for streaming sources
      audio.play().catch(err => console.log("Autoplay blocked:", err));
      unlocked = true;

      // Remove all unlock listeners
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("pointerdown", unlockAudio);
    }
  }

  // Any real gesture will unlock audio
  document.addEventListener("click", unlockAudio);
  document.addEventListener("touchstart", unlockAudio);
  document.addEventListener("keydown", unlockAudio);
  document.addEventListener("pointerdown", unlockAudio);

  // Manual controls
  playBtn.addEventListener("click", () => audio.play());
  pauseBtn.addEventListener("click", () => audio.pause());
});



