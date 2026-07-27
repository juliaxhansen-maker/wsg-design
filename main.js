/* Shared behavior across every page: mobile nav toggle, scroll reveal, ticker strip. */

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ticker strip: duplicate content once for seamless loop
  const strip = document.getElementById('strip');
  if (strip) {
    strip.innerHTML = strip.innerHTML + strip.innerHTML;
  }
});
