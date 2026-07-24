/* v10 — Masonry marquee dùng chung. Mobile: ảnh ngang chiếm đúng chiều
   ngang container (đo bằng ResizeObserver sau khi layout xong), chiều cao
   tỉ lệ thật. Desktop: 2 hàng cố định ROW_H. */
function initMarqueeMasonry(container){
  if(!container) return;
  var figs = Array.prototype.slice.call(container.querySelectorAll(':scope > figure'));
  if(figs.length < 2) return;
  container.classList.add('sponsor__gallery', 'mg-marquee-mode');

  var ROW_H = window.innerWidth <= 820 ? 160 : 280;
  var GAP   = window.innerWidth <= 820 ? 8   : 10;

  function getRatio(f){
    var img = f.querySelector('img');
    return (img && img.naturalWidth && img.naturalHeight)
      ? (img.naturalWidth / img.naturalHeight) : 1.3;
  }

  function pairLandscapes(list){
    var landscapes = [], portraits = [];
    list.forEach(function(f){
      (getRatio(f) >= 0.85 ? landscapes : portraits).push(f);
    });
    var out = [], li = 0, pi = 0;
    while(li < landscapes.length || pi < portraits.length){
      if(li < landscapes.length){ out.push(landscapes[li++]); }
      if(li < landscapes.length){ out.push(landscapes[li++]); }
      if(pi < portraits.length){ out.push(portraits[pi++]); }
    }
    return out;
  }

  /* pairColW > 0 (mobile): ảnh ngang = pairColW, cao tỉ lệ thật.
     pairColW = 0 (desktop): kích thước theo ROW_H cố định.           */
  function layoutRow(list, startLeft, pairColW){
    var rowW = [startLeft, startLeft];
    var placements = [];
    var lastPairH = ROW_H * 2 + GAP;
    var i = 0;
    while(i < list.length){
      var f = list[i];
      var ratio = getRatio(f);
      if(ratio < 0.85){
        var h = lastPairH, w = h * ratio;
        var left = Math.max(rowW[0], rowW[1]);
        placements.push({ f:f, left:left, top:0, w:w, h:h });
        rowW[0] = rowW[1] = left + w + GAP;
        i++;
      } else {
        var next = list[i+1], nextRatio = next ? getRatio(next) : null;
        var left2 = Math.max(rowW[0], rowW[1]);
        if(next && nextRatio >= 0.85){
          var w1, w2, h1, h2, colW, pairH;
          if(pairColW){
            w1 = w2 = pairColW;
            h1 = Math.round(pairColW / ratio);
            h2 = Math.round(pairColW / nextRatio);
            colW = pairColW;
            pairH = h1 + GAP + h2;
          } else {
            w1 = ROW_H * ratio; w2 = ROW_H * nextRatio;
            h1 = h2 = ROW_H;
            colW = Math.max(w1, w2);
            pairH = ROW_H * 2 + GAP;
          }
          lastPairH = pairH;
          placements.push({ f:f,    left:left2, top:0,        w:w1, h:h1 });
          placements.push({ f:next, left:left2, top:h1+GAP,   w:w2, h:h2 });
          rowW[0] = rowW[1] = left2 + colW + GAP;
          i += 2;
        } else {
          var hh, ww;
          if(pairColW){ ww = pairColW; hh = Math.round(pairColW / ratio); }
          else         { hh = ROW_H*2+GAP; ww = hh * ratio; }
          lastPairH = hh;
          placements.push({ f:f, left:left2, top:0, w:ww, h:hh });
          rowW[0] = rowW[1] = left2 + ww + GAP;
          i++;
        }
      }
    }
    var totalW = Math.max(rowW[0], rowW[1]) - GAP;
    var trackH = 0;
    placements.forEach(function(p){ trackH = Math.max(trackH, p.top + p.h); });
    return { placements:placements, totalW:Math.max(totalW,0), trackH:trackH || ROW_H*2+GAP };
  }

  function applyPlacement(p){
    p.f.style.setProperty('left',   p.left+'px', 'important');
    p.f.style.setProperty('top',    p.top+'px',  'important');
    p.f.style.setProperty('width',  p.w+'px',    'important');
    p.f.style.setProperty('height', p.h+'px',    'important');
  }

  /* pairColW truyền vào từ ngoài (ResizeObserver đo sau khi layout xong) */
  function build(pairColW){
    pairColW = pairColW || 0;
    var isMobile = window.innerWidth <= 820;

    var track = document.createElement('div');
    track.className = 'mg-track';

    var ordered = pairLandscapes(figs);
    var orig    = layoutRow(ordered, 0, pairColW);
    orig.placements.forEach(applyPlacement);
    var totalW = orig.totalW, trackH = orig.trackH;

    var clones = ordered.map(function(f){
      var c = f.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      return c;
    });
    orig.placements.forEach(function(p,i){
      applyPlacement({ f:clones[i], left:p.left+totalW+GAP, top:p.top, w:p.w, h:p.h });
    });

    if(isMobile){
      container.style.setProperty('mask-image',         'none', 'important');
      container.style.setProperty('-webkit-mask-image', 'none', 'important');
    }

    ordered.concat(clones).forEach(function(f){ track.appendChild(f); });

    track.style.setProperty('height', trackH+'px',             'important');
    track.style.setProperty('width',  (totalW*2+GAP)+'px',     'important');
    track.style.setProperty('--mg-scroll-x', '-'+(totalW+GAP)+'px');

    container.appendChild(track);
    container.dataset.marqueeInit = '1';

    var wrap = container.closest('.slideshow-wrap');
    if(wrap) Array.prototype.forEach.call(
      wrap.querySelectorAll('.slideshow-nav, .slideshow-dots'),
      function(el){ el.remove(); }
    );
  }

  function getMobileWidth(){
    /* Đo content-area của section cha — đây là khoảng giữa lề trái và phải
       mà gallery cần vừa khít. Dùng clientWidth - padding vì getComputedStyle
       trả về pixel thực sau khi clamp() được tính xong.                      */
    var section = container.closest('section') || container.closest('.project');
    if(section){
      var cs = getComputedStyle(section);
      var w = section.clientWidth
              - parseFloat(cs.paddingLeft)
              - parseFloat(cs.paddingRight);
      if(w > 0) return Math.floor(w);
    }
    /* Fallback: đo container trực tiếp */
    var cw = Math.floor(container.getBoundingClientRect().width);
    return cw > 0 ? cw : 0;
  }

  function startBuild(){
    if(window.innerWidth <= 820){
      build(getMobileWidth());
    } else {
      build(0);
    }
  }

  var imgs    = figs.map(function(f){ return f.querySelector('img'); }).filter(Boolean);
  var pending = imgs.filter(function(img){ return !img.complete; });
  if(pending.length === 0){
    startBuild();
  } else {
    var remaining = pending.length;
    function done(){ if(--remaining <= 0) startBuild(); }
    pending.forEach(function(img){
      img.addEventListener('load',  done);
      img.addEventListener('error', done);
    });
  }
}
