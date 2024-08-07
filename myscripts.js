
//  // element.addEventListener("click", function (); });
// // responsive navigation
// $(document).ready(function () {
//   $(".hamburger-icon").click(function () {
//     // this updates the class name of .mobile-nav to .mobile-nav.open 
    
//     $(".mobile-nav").toggleClass("open");

//     // you'll need to add a selector in css to define what .mobile-nav.open looks like
//     $(".mobile-nav").toggleClass("closed");
//     $(".hamburger-icon").toggleClass("closed");
//     // add here a toggle to make the hamburger disappear on this click as well
//     // eg $(".hamburger-icon").toggleClass("closed")
//     // then define .hamburger-icon.closed to eg display: none in Css
    

//   });
// });

//

// // responsive navigatioon
// $(document).ready(function () {
//     $(".hamburger-icon").click(function () {
//         $(".mobile-nav").toggleClass("open");
//     });
// });

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.querySelector(".hamburger-icon");
    if (el) {
        el.addEventListener('click', menuClick, false)
    }
})
function menuClick() {
    //alert("here")
    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
    } else {
        mobileNav.classList.toggle("open");
    }
 
}