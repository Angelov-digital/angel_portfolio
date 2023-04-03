myID = document.getElementById("customID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 860) {
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

(function($) {

 
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".serviceMain").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".service");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});


//SHOW IMAGE FULLSCREEN OPTION1
//function getPics() {} //just for this demo
//const imgs = document.querySelectorAll('.project img');
//const fullPage = document.querySelector('#fullpage');

//imgs.forEach(img => {
 // img.addEventListener('click', function() {
  //  fullPage.style.backgroundImage = 'url(' + img.src + ')';
  //  fullPage.style.display = 'block';
 // });
//});



//SHOW IMAGE FULLSCREEN OPTION2 MODAL
// Get the modal
var modal = document.getElementById("project1-modal");
var modal2 = document.getElementById("project2-modal");
var modal3 = document.getElementById("project3-modal");
var modal4 = document.getElementById("project4-modal");
var modal5 = document.getElementById("project5-modal");
var modal6 = document.getElementById("project6-modal");
var modal7 = document.getElementById("project7-modal");
var modal8 = document.getElementById("project8-modal");
var modal9 = document.getElementById("project9-modal");


// Get the image and insert it inside the modal - use its "alt" text as a caption
var trigger = document.getElementById("project1");
var trigger2 = document.getElementById("project2");
var trigger3 = document.getElementById("project3");
var trigger4 = document.getElementById("project4");
var trigger5 = document.getElementById("project5");
var trigger6 = document.getElementById("project6");
var trigger7 = document.getElementById("project7");
var trigger8 = document.getElementById("project8");
var trigger9 = document.getElementById("project9");


//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");

//Triggerz
trigger.onclick = function(){
  modal.style.display = "block";
  
  
}
trigger2.onclick = function(){
  modal2.style.display = "block";
  
  
}
trigger3.onclick = function(){
  modal3.style.display = "block";
  
  
}
trigger4.onclick = function(){
  modal4.style.display = "block";
  
  
}
trigger5.onclick = function(){
  modal5.style.display = "block";
  
  
}
trigger6.onclick = function(){
  modal6.style.display = "block";
  
  
}
trigger7.onclick = function(){
  modal7.style.display = "block";
  
  
}
trigger8.onclick = function(){
  modal8.style.display = "block";
  
  
}
trigger9.onclick = function(){
  modal9.style.display = "block";
  
  
}

//Next functions
var next = document.getElementById("next1");
next.onclick = function(){
  modal2.style.display = "block";
  modal.style.display = "none";  
}
var next2 = document.getElementById("next2");
next2.onclick = function(){
  modal3.style.display = "block";
  modal2.style.display = "none";  
}
var next3 = document.getElementById("next3");
next3.onclick = function(){
  modal4.style.display = "block";
  modal3.style.display = "none";  
}
var next4 = document.getElementById("next4");
next4.onclick = function(){
  modal5.style.display = "block";
  modal4.style.display = "none";  
}
var next5 = document.getElementById("next5");
next5.onclick = function(){
  modal6.style.display = "block";
  modal5.style.display = "none";  
}
var next6 = document.getElementById("next6");
next6.onclick = function(){
  modal7.style.display = "block";
  modal6.style.display = "none";  
}
var next7 = document.getElementById("next7");
next7.onclick = function(){
  modal8.style.display = "block";
  modal7.style.display = "none";  
}
var next8 = document.getElementById("next8");
next8.onclick = function(){
  modal9.style.display = "block";
  modal8.style.display = "none";  
}
var next9 = document.getElementById("next9");
next9.onclick = function(){
  modal.style.display = "block";
  modal9.style.display = "none";  
}
//Back functions
var prev1 = document.getElementById("prev1");
prev1.onclick = function(){
  modal9.style.display = "block";
  modal.style.display = "none";  
}
var prev2 = document.getElementById("prev2");
prev2.onclick = function(){
  modal.style.display = "block";
  modal2.style.display = "none";  
}
var prev3 = document.getElementById("prev3");
prev3.onclick = function(){
  modal2.style.display = "block";
  modal3.style.display = "none";  
}
var prev4 = document.getElementById("prev4");
prev4.onclick = function(){
  modal3.style.display = "block";
  modal4.style.display = "none";  
}
var prev5 = document.getElementById("prev5");
prev5.onclick = function(){
  modal4.style.display = "block";
  modal5.style.display = "none";  
}
var prev6 = document.getElementById("prev6");
prev6.onclick = function(){
  modal5.style.display = "block";
  modal6.style.display = "none";  
}
var prev7 = document.getElementById("prev7");
prev7.onclick = function(){
  modal6.style.display = "block";
  modal7.style.display = "none";  
}
var prev8 = document.getElementById("prev8");
prev8.onclick = function(){
  modal7.style.display = "block";
  modal8.style.display = "none";  
}
var prev9 = document.getElementById("prev9");
prev9.onclick = function(){
  modal8.style.display = "block";
  modal9.style.display = "none";  
}



// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");
var span7 = document.getElementById("close7");
var span8 = document.getElementById("close8");
var span9 = document.getElementById("close9");


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
} 
span3.onclick = function() {
  modal3.style.display = "none";
} 
span4.onclick = function() {
  modal4.style.display = "none";  
} 
span5.onclick = function() {
  modal5.style.display = "none";  
} 
span6.onclick = function() {
  modal6.style.display = "none";  
}
span7.onclick = function() {
  modal7.style.display = "none";  
}
span8.onclick = function() {
  modal8.style.display = "none";  
}
span9.onclick = function() {
  modal9.style.display = "none";  
}
