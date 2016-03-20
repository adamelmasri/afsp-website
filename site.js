
var smoothScrollingTargetElement = 'a[href*="#"]:not([href="#"])';
var headerHeight = 100;
var scrollSpeed = 300;
var mobileNavClassChangeName = "movile-nav-change"
var navigationList = "nav";

// Smooth-scrolling that targets links with an anchor to the current page
function enableSmoothScolling() {
  $(smoothScrollingTargetElement).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight
        }, scrollSpeed);
        return false;
      }
    }
  });

};

// Toggles mobile navbar animation css
function toggleMobileNavbar(x) {
    x.classList.toggle(mobileNavClassChangeName);
    $(navigationList).toggle();

}

$(document).ready(function() {
  enableSmoothScolling();
})

