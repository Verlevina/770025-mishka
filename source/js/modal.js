;(function(){
  var button = document.querySelectorAll(".js-open-modal");
  var modal = document.querySelector(".js-modal");
  var openModal = function() {
    modal.style.display = 'block';
  };

  button.forEach(function(it) {
    it.addEventListener('click', function(evnt) {
      evnt.preventDefault();
      openModal();
    })
  })
})();
