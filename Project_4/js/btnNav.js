let nav = document.getElementById('mynav'),
	navBtns = document.querySelectorAll('.btn-nav');

for (var i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}