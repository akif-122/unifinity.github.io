
// NAVABR SECTION
var navClose = document.querySelector('.nav-close-btn');
var navToggle = document.querySelector('#toggle');
var navSection = document.querySelector('#my-nav');
  

navClose.addEventListener('click', function(){
  navSection.style.left='-100%';
}) ;
navToggle.addEventListener('click', function(){
  navSection.style.left='0%';
});



// STICKY NAVBAR 

// document.addEventListener("DOMContentLoaded", function(){
//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//         document.getElementById('navbar_top').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('navbar_top').classList.remove('fixed-top');
//          // remove padding top from body
//         document.body.style.paddingTop = '0';
//       } 
//   });
// }); 
