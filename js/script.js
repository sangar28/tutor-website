// toggle meny bar

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".mobile-menu-toggle");

  const menuList = document.querySelector(".mobile-menu-list");
  toggleButton.addEventListener("click", function () {
    menuList.classList.toggle("active");
  });

  
});

// scroll navbar

window.addEventListener('scroll',function(){
  const navbar = document.querySelector('.navbar');

  if(window.scrollY>0){
    navbar.classList.add('navbar-scroll');
  }
  else{
    navbar.classList.remove('navbar-scroll');

  }
})
