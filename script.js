document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile');
    const navbar = document.getElementById('navbar');

    mobileMenu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

// images scroll

let scrollContainer = document.querySelector(".galary"); 
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;

});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// image 2 scroll
let scrollContainer1 = document.querySelector(".galary1"); 
let backBtn1 = document.getElementById("backBtn1");
let nextBtn1 = document.getElementById("nextBtn1");

scrollContainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    scrollContainer1.style.scrollBehavior = "auto";
});

nextBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft += 900;

});

backBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft -= 900;
});

