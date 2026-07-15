// ============================
// Meher's Group - app.js
// ============================

// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// Search
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        console.log("Searching:", this.value);
        // ভবিষ্যতে API Search এখানে যুক্ত হবে
    });
}

// Add To Cart
const cartButtons = document.querySelectorAll(".product button");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

// Wishlist
const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});

// Hero Slider (Placeholder)
let currentSlide = 0;

function nextSlide() {
    console.log("Slide:", currentSlide);
    currentSlide++;
}

setInterval(nextSlide, 5000);
// Hero Slider

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    slides[index].classList.add("active");

}

setInterval(()=>{

    current++;

    if(current>=slides.length){
        current=0;
    }

    showSlide(current);

},4000);
