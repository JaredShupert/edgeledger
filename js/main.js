const navebar = document.querySelector("#navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navebar.classList.remove("top");
    if (!scrolled) {
      navebar.style.transform = "translateY(-70px)";
    }
    this.setTimeout(function () {
      navebar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navebar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
