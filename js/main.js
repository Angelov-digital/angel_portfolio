myID = document.getElementById("customID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 900) {
    myID.className = "cta show"
  } else {
    myID.className = "cta hide"
  }
};

window.addEventListener("scroll", myScrollFunc);


$(document).scroll(function () {
  //stick nav to top of page
  var y = $(this).scrollTop();
  var navWrap = $('#navWrap').offset().top;
  if (y > navWrap) {
      $('nav').addClass('sticky');
  } else {
      $('nav').removeClass('sticky');
  }
});