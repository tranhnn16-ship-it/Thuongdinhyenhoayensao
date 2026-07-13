(function(){
  var selectors = ['.community__gallery','.sponsor__gallery','.project__gallery','.project__gallery--masonry','.gallery-carousel__track'];
  var tracks = [];
  selectors.forEach(function(s){ [].forEach.call(document.querySelectorAll(s), function(el){ tracks.push(el); }); });

  tracks.forEach(function(track){
    if(track.dataset.slideshowInit) return;
    track.dataset.slideshowInit='1';
    var wrap = document.createElement('div');
    wrap.className = 'slideshow-wrap';
    track.parentNode.insertBefore(wrap, track);
    wrap.appendChild(track);

    var prev = document.createElement('button');
    prev.type='button'; prev.className='slideshow-nav slideshow-nav--prev';
    prev.setAttribute('aria-label','Trước'); prev.innerHTML='&larr;';
    var next = document.createElement('button');
    next.type='button'; next.className='slideshow-nav slideshow-nav--next';
    next.setAttribute('aria-label','Sau'); next.innerHTML='&rarr;';
    wrap.appendChild(prev); wrap.appendChild(next);

    var items = [].slice.call(track.children);
    var dots = document.createElement('div');
    dots.className='slideshow-dots';
    items.forEach(function(_, i){
      var dot = document.createElement('button');
      dot.type='button';
      dot.className='slideshow-dot';
      dot.setAttribute('aria-label','Ảnh '+(i+1));
      dot.addEventListener('click', function(){
        var target = items[i];
        target.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
      });
      dots.appendChild(dot);
    });
    wrap.appendChild(dots);

    function currentIndex(){
      var scrollLeft = track.scrollLeft;
      var trackW = track.clientWidth;
      var center = scrollLeft + trackW/2;
      var best = 0, bestDist = Infinity;
      items.forEach(function(it, i){
        var itCenter = it.offsetLeft + it.offsetWidth/2;
        var d = Math.abs(center - itCenter);
        if(d < bestDist){ bestDist=d; best=i; }
      });
      return best;
    }
    function updateDots(){
      var idx = currentIndex();
      [].forEach.call(dots.children, function(d, i){
        d.classList.toggle('is-active', i===idx);
      });
    }
    track.addEventListener('scroll', function(){
      clearTimeout(track._t);
      track._t = setTimeout(updateDots, 50);
    });
    updateDots();

    function step(){
      var f = items[0];
      if(!f) return 320;
      var gap = parseFloat(getComputedStyle(track).gap)||16;
      return f.getBoundingClientRect().width + gap;
    }
    prev.addEventListener('click', function(){
      var idx = Math.max(0, currentIndex()-1);
      items[idx].scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
    });
    next.addEventListener('click', function(){
      var idx = Math.min(items.length-1, currentIndex()+1);
      items[idx].scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
    });

    // Drag to scroll
    var dragging=false, startX, startScroll;
    track.addEventListener('pointerdown', function(e){
      dragging=true; startX=e.clientX; startScroll=track.scrollLeft;
      try{ track.setPointerCapture(e.pointerId); }catch(_){}
    });
    track.addEventListener('pointermove', function(e){
      if(!dragging) return;
      track.scrollLeft = startScroll - (e.clientX-startX);
    });
    ['pointerup','pointercancel','pointerleave'].forEach(function(ev){
      track.addEventListener(ev, function(){ dragging=false; });
    });
  });
})();
