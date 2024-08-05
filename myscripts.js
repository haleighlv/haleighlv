
 // element.addEventListener("click", function (); });
// responsive navigation
$(document).ready(function () {
  $(".hamburger-icon").click(function () {
      
    // this updates the class name of .mobile-nav to .mobile-nav.open 
    
    $(".mobile-nav").toggleClass("open");

    // you'll need to add a selector in css to define what .mobile-nav.open looks like
    $(".mobile-nav").toggleClass("closed");
    $(".hamburger-icon").toggleClass("closed");
    // add here a toggle to make the hamburger disappear on this click as well
    // eg $(".hamburger-icon").toggleClass("closed")
    // then define .hamburger-icon.closed to eg display: none in Css
    

  });
});

// //