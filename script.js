// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-menu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(248, 244, 238, 0.95)";
        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";

    }

});