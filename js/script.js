/* To do:
(1) fix signin background color on scroll class
(2) add scroll function to js so classes are added when user scrolls

*/


var navbar = document.querySelector("header");
var navbarLinks = document.querySelectorAll("nav a");
var signIn = document.querySelector(".signin");




navbar.classList.add("navbar-scroll");

for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.add("navbar-scroll-links");
}

signIn.classList.add("signin-scroll");