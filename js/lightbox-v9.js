/* v9 — Lightbox ảnh dùng chung: bấm vào ảnh nội dung để xem full size */
(function(){
  var overlay = document.createElement('div');
  overlay.className = 'img-lightbox';
  /* Ép các thuộc tính hiển thị quan trọng bằng inline + !important — thắng
     tuyệt đối mọi rule khác trong style-v9.css (file có rất nhiều !important
     chồng chéo), tránh trường hợp overlay này bị 1 rule nào đó vô tình che mất
     trên một số trình duyệt/máy desktop dù script vẫn chạy đúng. */
  var s = overlay.style;
  s.setProperty('position', 'fixed', 'important');
  s.setProperty('inset', '0', 'important');
  s.setProperty('z-index', '2147483647', 'important');
  s.setProperty('background', 'rgba(10,4,6,.92)', 'important');
  s.setProperty('display', 'none', 'important');
  s.setProperty('align-items', 'center', 'important');
  s.setProperty('justify-content', 'center', 'important');
  s.setProperty('padding', '20px', 'important');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Xem ảnh full size');
  overlay.innerHTML =
    '<button type="button" class="img-lightbox__close" aria-label="Đóng">&times;</button>' +
    '<img class="img-lightbox__img" alt="">';
  document.documentElement.appendChild(overlay);

  var lbImg = overlay.querySelector('.img-lightbox__img');
  var closeBtn = overlay.querySelector('.img-lightbox__close');

  function isOpen(){ return overlay.style.display !== 'none'; }

  function open(src, alt){
    if(!src) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    s.setProperty('display', 'flex', 'important');
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    s.setProperty('display', 'none', 'important');
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    closeBtn.blur();
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e){
    if(e.target === overlay) close();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && isOpen()) close();
  });

  /* Ảnh trang trí / icon / đã có tương tác riêng — không mở lightbox */
  var EXCLUDE_SELF = [
    '.brand-mark__icon', '.static-cliff', '.page-hero__img',
    '.contact__info-media', '.cert-lightbox__img',
    '.hero__cave-img', '.hero__emblem-ring', '.hero__emblem-bird', '.hero__lotus-spin',
    '.philosophy__watermark', '.rotating-medallion',
    '.contact__form-emblem', '.about-cta__emblem', '.product-cta-band__emblem'
  ].join(',');
  /* Lưu ý: KHÔNG loại trừ theo [aria-hidden="true"] chung chung — các gallery
     marquee (Miss Grand, đối tác) nhân bản ảnh để chạy vòng lặp liền mạch và
     gắn aria-hidden="true" lên bản sao, loại trừ kiểu đó sẽ khiến một nửa số
     ảnh đang hiển thị không bấm được. Chỉ loại trừ đúng các khối trang trí. */
  var EXCLUDE_ANCESTOR = [
    '.hero-thumb', '.cert-lightbox-trigger', '#cert-lightbox', '.site-header',
    '.scroll-motif', '.hero__birds', '.hero__birds-fly', '.footer-birds',
    '.journey-medallion-wrap', '.trong-dong-bg-wrap',
    '.partners-v5__wall', '.partners-v5__chip', '.section-gap-mark',
    '.img-lightbox'
  ].join(',');

  document.addEventListener('click', function(e){
    var img = e.target.closest('img');
    if(!img || !img.src) return;
    if(img.matches(EXCLUDE_SELF)) return;
    if(img.closest(EXCLUDE_ANCESTOR)) return;
    e.preventDefault();
    open(img.currentSrc || img.src, img.alt);
  });
})();
