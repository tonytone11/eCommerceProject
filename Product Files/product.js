// Fetch my JSON file
fetch("mainImages.json")
    .then(response => response.json()) // response is turned into a JSON file
    .then(data => { // then run data func
        const myProducts = document.getElementById("products"); // displays variable myProducts in product div
        data.forEach(item => { // will loop through my JSON data
            // what will print out on my itens
            const productHTML = ` 
            <div class="item-container">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
            </div>
            `;
            // generates divs in my hmtl based on my JSON data
            myProducts.innerHTML += productHTML;
        });
    })
    .catch(error => { // will display error if JSON doesn't load
        console.error("Error loading JSON data:", error);
    });