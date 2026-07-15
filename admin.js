const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const price = form.querySelector('input[type="number"]').value;
    const image = form.querySelectorAll('input[type="text"]')[1].value;

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added Successfully!");

    form.reset();

});
