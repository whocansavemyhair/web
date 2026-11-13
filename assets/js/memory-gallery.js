/* Repeat the strip on both sides so swiping and buttons share the same loop. */
document.querySelectorAll('[data-memory-carousel]').forEach(gallery => {
  const track = gallery.querySelector('.memory-track');
  const originals = Array.from(track.querySelectorAll('.memory-slide'));
  const captions = gallery.querySelectorAll('.memory-caption');
  const count = gallery.querySelector('.memory-count');
  const length = originals.length;
  if (!length) return;
  const copy = slide => {
    const clone = slide.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a').forEach(link => link.tabIndex = -1);
    return clone;
  };
  track.prepend(...originals.map(copy));
  track.append(...originals.map(copy));
  const slides = Array.from(track.querySelectorAll('.memory-slide'));
  let physical = length;
  let current = 0;
  let timer;
  let frame;
  const position = index => slides[index].offsetLeft - slides[0].offsetLeft;
  function update(index) {
    physical = index;
    current = index % length;
    if (captions.length > 1) captions.forEach((caption, i) => { caption.hidden = i !== current; });
    count.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(length).padStart(2, '0');
  }
  function nearest() {
    let best = 0;
    slides.forEach((slide, i) => {
      if (Math.abs(position(i) - track.scrollLeft) < Math.abs(position(best) - track.scrollLeft)) best = i;
    });
    update(best);
  }
  function settle() {
    nearest();
    if (physical < length || physical >= length * 2) {
      physical = length + current;
      track.scrollTo({left: position(physical), behavior: 'instant'});
    }
  }
  function go(delta) {
    const target = Math.max(0, Math.min(slides.length - 1, physical + delta));
    track.scrollTo({left: position(target), behavior:
      matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  gallery.querySelector('.memory-prev').addEventListener('click', () => go(-1));
  gallery.querySelector('.memory-next').addEventListener('click', () => go(1));
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      go(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(nearest);
    clearTimeout(timer);
    timer = setTimeout(settle, 180);
  }, {passive: true});
  track.addEventListener('scrollend', settle);
  let trackWidth = track.clientWidth;
  new ResizeObserver(() => {
    // A caption or image height change must never interrupt horizontal motion.
    if (track.clientWidth === trackWidth) return;
    trackWidth = track.clientWidth;
    physical = length + current;
    track.scrollTo({left: position(physical), behavior: 'instant'});
  }).observe(track);
  track.scrollTo({left: position(length), behavior: 'instant'});
  const autoplayDelay = Number(gallery.dataset.autoplay);
  if (autoplayDelay > 0) {
    let autoplayTimer;
    const restart = () => {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        if (!document.hidden && !gallery.matches(':hover, :focus-within')) go(1);
      }, autoplayDelay);
    };
    gallery.addEventListener('pointerdown', restart);
    gallery.addEventListener('keydown', restart);
    gallery.addEventListener('mouseleave', restart);
    gallery.addEventListener('focusout', restart);
    restart();
  }
});
