const hamburger = document.querySelector('.fa-bars') as HTMLElement;
const closeBtn = document.querySelector('.fa-close') as HTMLElement;
const nav = document.getElementById('mobile-navigation') as HTMLElement;
const navLinks = document.querySelectorAll(
  '#nav-link'
) as NodeListOf<HTMLElement>;

/**
 * Function to toggle the navigation menu
 *
 * @returns {void}
 * @description This function adds event listeners to the hamburger icon, close button, and navigation links.
 * When the hamburger icon is clicked, the navigation menu is displayed.
 */
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

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    nav.style.display = 'none';
    nav.style.opacity = '0';
    nav.style.visibility = 'hidden';
  });
});
