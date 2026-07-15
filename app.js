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

let cart = [];

const cartCount = document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(btn=>{

btn.onclick=()=>{

cart.push({

name:btn.dataset.name,

price:btn.dataset.price

});

cartCount.innerText=cart.length;

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to Cart");

}

});

const savedCart=JSON.parse(localStorage.getItem("cart"));

if(savedCart){

cart=savedCart;

cartCount.innerText=cart.length;

}

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
