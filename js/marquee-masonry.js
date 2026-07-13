/* v10 — Masonry marquee auto-scroll dùng chung (Miss Grand trang chủ +
   gallery tài trợ). Vị trí từng ảnh được TÍNH TOÁN TRỰC TIẾP bằng JS
   (thuật toán "hàng ngắn nhất trước", giống Pinterest-masonry) thay vì
   dựa vào CSS Grid tự sắp xếp — mỗi ảnh luôn đặt sát ngay ảnh liền
   trước trong cùng hàng, nên về cấu trúc KHÔNG THỂ còn khoảng trống dù
   ảnh ngang/dọc tỉ lệ bất kỳ. Width luôn đúng tỉ lệ ảnh thật nên không
   cắt xén. Container được gán class "sponsor__gallery mg-marquee-mode"
   để dùng chung style-v10.css (không cần CSS riêng cho từng trang). */
function initMarqueeMasonry(container){
  if(!container) return;
  var figs = Array.prototype.slice.call(container.querySelectorAll(':scope > figure'));
  if(figs.length < 2) return;
  container.classList.add('sponsor__gallery', 'mg-marquee-mode');

  var ROW_H = window.innerWidth <= 820 ? 190 : 280;
  var GAP = window.innerWidth <= 820 ? 8 : 10;

  function getRatio(f){
    var img = f.querySelector('img');
    return (img && img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1.3;
  }

  // Xếp 1 danh sách ảnh sao cho 2 hàng LUÔN đồng bộ chiều rộng sau
  // mỗi đơn vị được đặt — ảnh dọc chiếm trọn 2 hàng; ảnh ngang được
  // ghép cặp với ảnh ngang liền kề (2 ảnh cùng bắt đầu 1 vị trí,
  // xếp trên/dưới); ảnh ngang lẻ (không có cặp) cũng chiếm trọn 2
  // hàng luôn. Nhờ vậy không bao giờ có 1 hàng bị "nợ" chiều rộng
  // dẫn đến hở khoảng trống khi gặp ảnh dọc tiếp theo.
  function layoutRow(list, startLeft){
    var rowW = [startLeft, startLeft];
    var placements = [];
    var i = 0;
    while(i < list.length){
      var f = list[i];
      var ratio = getRatio(f);
      if(ratio < 0.85){
        var h = ROW_H * 2 + GAP;
        var w = h * ratio;
        var left = Math.max(rowW[0], rowW[1]);
        placements.push({ f:f, left:left, top:0, w:w, h:h });
        rowW[0] = left + w + GAP;
        rowW[1] = left + w + GAP;
        i++;
      } else {
        var next = list[i + 1];
        var nextRatio = next ? getRatio(next) : null;
        var left2 = Math.max(rowW[0], rowW[1]);
        if(next && nextRatio >= 0.85){
          var w1 = ROW_H * ratio;
          var w2 = ROW_H * nextRatio;
          placements.push({ f:f, left:left2, top:0, w:w1, h:ROW_H });
          placements.push({ f:next, left:left2, top:ROW_H + GAP, w:w2, h:ROW_H });
          rowW[0] = left2 + w1 + GAP;
          rowW[1] = left2 + w2 + GAP;
          i += 2;
        } else {
          // ảnh ngang lẻ, không có cặp — chiếm trọn 2 hàng để giữ đồng bộ
          var hh = ROW_H * 2 + GAP;
          var ww = hh * ratio;
          placements.push({ f:f, left:left2, top:0, w:ww, h:hh });
          rowW[0] = left2 + ww + GAP;
          rowW[1] = left2 + ww + GAP;
          i++;
        }
      }
    }
    var totalW = Math.max(rowW[0], rowW[1]) - GAP;
    return { placements: placements, totalW: Math.max(totalW, 0) };
  }

  function applyPlacement(p){
    // Dùng setProperty(...,'important') thay vì style.left = ... vì có
    // vài rule CSS cũ khác trong site đặt !important lên width/height
    // của figure — inline style thường sẽ bị rule đó đè mất. Gán thẳng
    // !important trên inline style là mức ưu tiên cao nhất, đảm bảo
    // luôn thắng tuyệt đối.
    p.f.style.setProperty('left', p.left + 'px', 'important');
    p.f.style.setProperty('top', p.top + 'px', 'important');
    p.f.style.setProperty('width', p.w + 'px', 'important');
    p.f.style.setProperty('height', p.h + 'px', 'important');
  }

  function build(){
    var track = document.createElement('div');
    track.className = 'mg-track';

    var orig = layoutRow(figs, 0);
    orig.placements.forEach(applyPlacement);
    var totalW = orig.totalW;

    // Nhân bản để chạy lặp liên tục — dùng lại ĐÚNG kích thước đã
    // tính từ ảnh gốc (không tính lại từ ảnh vừa clone, vì ảnh
    // clone chưa chắc đã tải xong nên đọc tỉ lệ có thể sai/=0,
    // làm bản sao lệch khỏi bản gốc), chỉ dịch sang phải thêm
    // đúng bằng tổng chiều rộng bản gốc.
    var clones = figs.map(function(f){
      var c = f.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      return c;
    });
    orig.placements.forEach(function(p, i){
      applyPlacement({ f:clones[i], left:p.left + totalW + GAP, top:p.top, w:p.w, h:p.h });
    });

    figs.concat(clones).forEach(function(f){ track.appendChild(f); });

    var trackH = ROW_H * 2 + GAP;
    track.style.setProperty('height', trackH + 'px', 'important');
    track.style.setProperty('width', (totalW * 2 + GAP) + 'px', 'important');
    track.style.setProperty('--mg-scroll-x', '-' + (totalW + GAP) + 'px');

    container.appendChild(track);
    container.dataset.marqueeInit = '1';
    var wrap = container.closest('.slideshow-wrap');
    if(wrap){
      Array.prototype.forEach.call(wrap.querySelectorAll('.slideshow-nav, .slideshow-dots'), function(el){ el.remove(); });
    }
  }

  var imgs = figs.map(function(f){ return f.querySelector('img'); }).filter(Boolean);
  var pending = imgs.filter(function(img){ return !img.complete; });
  if(pending.length === 0){
    build();
  } else {
    var remaining = pending.length;
    function done(){ remaining--; if(remaining <= 0) build(); }
    pending.forEach(function(img){
      img.addEventListener('load', done);
      img.addEventListener('error', done);
    });
  }
}
