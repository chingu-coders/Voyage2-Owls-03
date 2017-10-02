var navbar = document.querySelector("header");
var navbarLinks = document.querySelectorAll("nav a");
var signIn = document.getElementById("signin");




navbar.classList.add("navbar-scroll");

for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.add("navbar-scroll-links");
}

signIn.classList.add("signin-scroll")