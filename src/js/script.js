let button = document.querySelector("#header__button");
let nav = document.querySelector("#header__nav");
let menu = false;

button.addEventListener("click", iniciar);

function iniciar() {
    if (menu == false) {
        nav.style.display = 'block';
        menu = true;
    } else {
        nav.style.display = 'none';
        menu = false;
    }
}
