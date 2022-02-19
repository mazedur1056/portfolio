// const navbar = document.querySelector('#navbar')
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  const lastPosition = window.scrollY
  if (lastPosition > 60 ) {
    navbar.classList.add('nav-bg')
  } 
//   else if (navbar.classList.contains('nav-bg')) {
//     navbar.classList.remove('nav-bg')
//   } 
  else {
    navbar.classList.remove('nav-bg')
  }
})
