"use strict";
const hamburger = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-close');
const nav = document.getElementById('mobile-navigation');
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
