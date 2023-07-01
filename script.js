// Animations on page load
window.addEventListener('DOMContentLoaded', function() {
    var homepage = document.querySelector('#homepage');
    var login = document.querySelector('#login');
    var register = document.querySelector('#register');
    
    homepage.classList.add('fade-in');
    login.classList.add('slide-up');
    register.classList.add('slide-up');
  });
  