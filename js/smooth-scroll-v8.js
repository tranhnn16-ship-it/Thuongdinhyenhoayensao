/* Simple smooth wheel scrolling — RAF-based lerp */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if('ontouchstart' in window && window.matchMedia('(max-width: 820px)').matches) return; // native on mobile

  var target = window.scrollY;
  var current = window.scrollY;
  var ease = 0.14;
  var running = false;

  function loop(){
    current += (target - current) * ease;
    if(Math.abs(target - current) < 0.5){
      current = target;
      window.scrollTo(0, current);
      running = false;
      return;
    }
    window.scrollTo(0, current);
    requestAnimationFrame(loop);
  }

  window.addEventListener('wheel', function(e){
    if(e.ctrlKey) return; // zoom
    if(e.deltaMode !== 0) return; // ignore line/page mode
    e.preventDefault();
    target += e.deltaY;
    target = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, target));
    if(!running){ running = true; requestAnimationFrame(loop); }
  }, {passive:false});

  // Reset on user drag on scrollbar
  var syncing;
  window.addEventListener('scroll', function(){
    if(running) return;
    clearTimeout(syncing);
    syncing = setTimeout(function(){ target = window.scrollY; current = window.scrollY; }, 60);
  });
})();
