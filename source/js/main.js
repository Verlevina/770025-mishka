;(function(){
  var button = document.querySelector(".toggle-button");
  var mobileMenu = document.querySelectorAll(".page-header__list");
  button.addEventListener('click', function(){
    mobileMenu.forEach(function(it){
      it.classList.toggle("hide");
    });
    button.classList.toggle("toggle-button--open");
  });
})();
