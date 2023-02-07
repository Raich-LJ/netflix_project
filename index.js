var acc = document.getElementsByClassName("FAQ_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var FAQ_visible = this.nextElementSibling;
    if (FAQ_visible.style.display === "block") {
      FAQ_visible.style.display = "none";
    } else {
      FAQ_visible.style.display = "block";
    }
  });
}
