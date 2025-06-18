const hamburger = document.querySelector('.fa-bars') as HTMLElement;
const closeBtn = document.querySelector('.fa-close') as HTMLElement;
const nav = document.getElementById('mobile-navigation') as HTMLElement;

hamburger.addEventListener('click', function () {
  nav.style.display = 'flex';
  nav.style.opacity = '1';
  nav.style.visibility = 'visible';
});

closeBtn.addEventListener('click', function () {
  nav.style.display = 'none';
  nav.style.opacity = '0';
  nav.style.visibility = 'hidden';
});
