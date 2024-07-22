const openMobileMenu = document.querySelector("#header__button");
const mobileMenu = document.querySelector("#header__nav");

openMobileMenu.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});