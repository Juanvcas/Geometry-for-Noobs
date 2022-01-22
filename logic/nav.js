// Menu Bar
let menuActive;

function menu() {
    const menuBar = document.getElementById("nav__ul");
    if (menuActive) {
        menuBar.style.display = "none";
        menuActive = false;
    } else {
        menuBar.style.display = "block";
        menuActive = true;
    }
}

