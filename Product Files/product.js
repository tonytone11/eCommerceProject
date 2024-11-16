document.addEventListener("DOMContentLoaded", function () {
    fetch("mainImages.json")
        .then(response => response.json())
        .then(data => {
            const product = document.getElementsByClassName(".product1");

            const name = document.createElement("p");
            name.textContent = mainImages.name;

            const price = document.createElement("p");
            price.textContent = mainImages.price;

            const description = document.createElement("p");
            description.textContent = mainImages.description;


            product.appendChild(name);
            product.appendChild(price);
            product.appendChild(description);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});