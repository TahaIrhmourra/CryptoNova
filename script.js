const hamburgerMenuBtn = document.querySelector(".nav-mobile .hamburger-menu .hamburger-menu-btn");

const hamburgerMenu = document.querySelector(".nav-mobile .hamburger-menu ul.links")

hamburgerMenuBtn.addEventListener("click", function(e) {
    if (hamburgerMenu.style.display == "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.classList.toggle("open");
    }
})