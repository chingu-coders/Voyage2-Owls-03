/* To do:
(1) find closer font style for donut logo

Refactor
(1) put navbar items (except signin) into a separate div
*/


var navbar = document.querySelector("header");
var navbarLinks = document.querySelectorAll("nav a");
var signIn = document.querySelector(".signin");


window.addEventListener('scroll', function() {

    if (window.scrollY > 35) {

        navbar.classList.add("navbar-scroll");

        for (var i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].classList.add("navbar-scroll-links");
        }

        signIn.classList.add("signin-scroll");
    }

    else {
        navbar.classList.remove("navbar-scroll");
        for (var i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].classList.remove("navbar-scroll-links");
        }
        signIn.classList.remove("signin-scroll");
    }

})