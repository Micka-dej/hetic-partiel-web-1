//Header cacher au scroll


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#header").style.top = "0";
  } else {
    document.querySelector("#header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}



//burger menu, mobile

var BurgerMenu = document.querySelector('#burgerMenu');
var ListNav = document.querySelector('#mainav ul');

BurgerMenu.addEventListener('click', function() {
	if (ListNav.style.display === "none") {
		ListNav.style.display = "block";
	}
  else {
		ListNav.style.display = "none";
	}
});


//Scrol to top button

var Scrolltop = document.getElementById("backtotop")


document.addEventListener('scroll', function(){
    if( window.pageYOffset > 500 ){
        Scrolltop.classList.add('visible');
    }
    else{
        Scrolltop.classList.remove('visible');
    }
});

Scrolltop.addEventListener('click', function(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
});
