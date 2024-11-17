fetch("mainImages.json")
    .then(response => response.json())
    .then(data => {
        const myProducts = document.getElementById("products");
        data.forEach(item => {
            const productHTML = `
            <div class="item-container">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
            </div>
            `;
            myProducts.innerHTML += productHTML;
        });
    })
    .catch(error => {
        console.error("Error loading JSON data:", error);
    });