(function () {
  'use strict';

  // ---------- Header scroll state ----------
  var header = document.getElementById('siteHeader');
  var brandIcon = document.getElementById('brandIcon');
  function onScroll() {
    var scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled);
    if (brandIcon) {
      var nextSrc = scrolled ? brandIcon.dataset.srcScrolled : brandIcon.dataset.srcTransparent;
      if (nextSrc && brandIcon.getAttribute('src') !== nextSrc) {
        brandIcon.setAttribute('src', nextSrc);
      }
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile nav toggle ----------
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  function closeNav() {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // ---------- Scroll reveal (also drives corner motifs: swallow / lotus) ----------
  var revealEls = document.querySelectorAll('[data-reveal], [data-scroll-motif]');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------- Reviews carousel ----------
  var track = document.getElementById('reviewsTrack');
  if (track) {
    var slides = Array.prototype.slice.call(track.children);
    var dotsWrap = document.getElementById('reviewsDots');
    var prevBtn = document.getElementById('reviewsPrev');
    var nextBtn = document.getElementById('reviewsNext');
    var current = 0;
    var autoplayMs = 6000;
    var timer = null;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'reviews__dot';
      dot.setAttribute('aria-label', 'Xem đánh giá ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); restart(); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function render() {
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
    }
    function goTo(i) {
      current = (i + slides.length) % slides.length;
      render();
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, autoplayMs);
    }

    nextBtn.addEventListener('click', function () { next(); restart(); });
    prevBtn.addEventListener('click', function () { prev(); restart(); });

    var carousel = track.closest('.reviews__carousel');
    carousel.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    carousel.addEventListener('mouseleave', restart);

    // Touch swipe
    var touchStartX = null;
    track.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (touchStartX === null) return;
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 40) { delta < 0 ? next() : prev(); restart(); }
      touchStartX = null;
    }, { passive: true });

    render();
    restart();
  }

  // ---------- Flavor collection carousel ----------
  var flavorsTrack = document.getElementById('flavorsTrack');
  if (flavorsTrack) {
    var flavorsPrev = document.getElementById('flavorsPrev');
    var flavorsNext = document.getElementById('flavorsNext');
    function flavorsScrollStep() {
      var card = flavorsTrack.querySelector('.flavor-card');
      var gap = parseFloat(getComputedStyle(flavorsTrack).columnGap || getComputedStyle(flavorsTrack).gap || 24);
      return card ? card.getBoundingClientRect().width + gap : 220;
    }
    flavorsPrev.addEventListener('click', function () {
      flavorsTrack.scrollBy({ left: -flavorsScrollStep() * 2, behavior: 'smooth' });
    });
    flavorsNext.addEventListener('click', function () {
      flavorsTrack.scrollBy({ left: flavorsScrollStep() * 2, behavior: 'smooth' });
    });
  }

  // ---------- Footer year ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
