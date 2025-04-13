// I coded this by following a YouTube tutorial by the channel called Coding in Public
// This makes the active page have a background on it so the user knows the page they're on
const activePage = window.location.pathname.split("/").pop(); // Get just the page, e.g. "speed.html"

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === activePage) {
    // Each of these links gets a unique background colour. The colours are applied in CSS
    if (href === 'index.html') {
      link.classList.add('active-home');
    } else if (href === 'about.html') {
      link.classList.add('active-about'); 
    } else if (href === 'speed.html') {
      link.classList.add('active-speed');
    } else if (href === 'memory.html') {
      link.classList.add('active-memory');
    } else if (href === 'strategy.html') {
      link.classList.add('active-strategy');
    } else if (href === 'creativity.html') {
      link.classList.add('active-creativity');
    } else if (href === 'spelling.html') {
      link.classList.add('active-spelling');
    } else if (href === 'precision.html') {
      link.classList.add('active-precision');
    }
  }
});