(function () {
  'use strict';

  // ---------- Gallery thumbnail switch ----------
  var galleryMain = document.getElementById('galleryMain');
  var thumbs = document.querySelectorAll('.product-gallery__thumb');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var full = thumb.getAttribute('data-full');
      if (full && galleryMain) galleryMain.setAttribute('src', full);
      thumbs.forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });

  // ---------- Grade / weight / price ----------
  var PRICES = {
    'thuong-hang': { 10: 400000, 30: 1200000, 50: 1950000, 100: 3800000 },
    'cao-cap': { 100: 3500000 }
  };
  var INGREDIENTS = {
    'thuong-hang': 'Tổ yến tinh chế nguyên tổ loại thượng hạng.',
    'cao-cap': 'Tổ yến tinh chế nguyên tổ loại cao cấp.'
  };

  var gradeSelect = document.getElementById('gradeSelect');
  var weightSelect = document.getElementById('weightSelect');
  var priceAmount = document.getElementById('priceAmount');
  var priceUnit = document.getElementById('priceUnit');
  var ingredientText = document.getElementById('ingredientText');

  var currentGrade = 'thuong-hang';
  var currentWeight = '100';

  function formatVnd(n) {
    return n.toLocaleString('vi-VN') + 'đ';
  }

  function render() {
    var weights = PRICES[currentGrade];
    if (!weights[currentWeight]) {
      currentWeight = Object.keys(weights)[Object.keys(weights).length - 1];
    }

    weightSelect.querySelectorAll('.option-pill').forEach(function (btn) {
      var w = btn.getAttribute('data-weight');
      var available = !!weights[w];
      btn.disabled = !available;
      btn.classList.toggle('is-active', available && w === currentWeight);
    });

    priceAmount.textContent = formatVnd(weights[currentWeight]);
    priceUnit.textContent = '/ ' + currentWeight + 'g';
    ingredientText.textContent = INGREDIENTS[currentGrade];

    gradeSelect.querySelectorAll('.option-pill').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-grade') === currentGrade);
    });
  }

  gradeSelect.querySelectorAll('.option-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentGrade = btn.getAttribute('data-grade');
      render();
    });
  });

  weightSelect.querySelectorAll('.option-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.disabled) return;
      currentWeight = btn.getAttribute('data-weight');
      render();
    });
  });

  render();

  // ---------- Tabs ----------
  var tabBtns = document.querySelectorAll('.product-tabs__btn');
  var tabPanels = document.querySelectorAll('.product-tabs__panel');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');
      tabBtns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      tabPanels.forEach(function (panel) {
        panel.classList.toggle('is-active', panel.id === target);
      });
    });
  });
})();
