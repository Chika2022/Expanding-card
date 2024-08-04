var panel = document.querySelectorAll(".panel");

for (var i = 0; i < panel.length; i++) {
  panel[i].addEventListener("mouseenter", function () {
    removeActiveClass();
    this.classList.add("active");
  });
}

function removeActiveClass() {
  for (var i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }
}
