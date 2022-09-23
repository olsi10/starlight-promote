var slideIndex = 0;
var slideIndex2 = 0;
carousel();
carousel2();

function carousel() {
    var i;
    var x = document.getElementsByClassName("main-img");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function carousel2() {
    var i;
    var y = document.getElementsByClassName("main-img2");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
      }
      slideIndex2++;
      if (slideIndex2 > y.length) {slideIndex2 = 1}
      y[slideIndex2-1].style.display = "block";
      setTimeout(carousel2, 2000); // Change image every 2 seconds
}