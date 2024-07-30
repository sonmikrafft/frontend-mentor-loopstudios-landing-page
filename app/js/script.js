const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".fade");

/*
* Event Listeners
* */
btnHamburger.addEventListener("click", function () {
    if (header.classList.contains("open")) {
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(function (elem) {
            elem.classList.add("fade-out");
            elem.classList.remove("fade-in");
        });
    } else {
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(function (elem) {
            elem.classList.add("fade-in");
            elem.classList.remove("fade-out");
        });
    }
});

/*
Reset Width-dependent Elements
 */
window.addEventListener('resize', function() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    header.classList.remove("open");
    fadeElems.forEach(function (elem) {
        elem.classList.add("fade-out");
        elem.classList.remove("fade-in");
    });
});