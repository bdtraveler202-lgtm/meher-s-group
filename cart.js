// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

function loadCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if(cart.length === 0){
        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        total.innerText = "0";
        return;
    }

    cart.forEach((item,index)=>{

        totalPrice += Number(item.price);

        cartItems.innerHTML += `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    });

    total.innerText = totalPrice;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();
}

loadCart();
