document.addEventListener('DOMContentLoaded', () => {
    const btnLoad = document.getElementById("btnLoad");
    const contProds = document.getElementById("contProds");
    const URL = "https://api.escuelajs.co/api/v1/products";

    btnLoad.addEventListener('click', () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            const nueveProds = data[0, 9];
            contProds.innerHTML = ''; 

            nueveProds.forEach(product => {
            const card = document.createElement('<div class="col-md-4"> </div>');
            
            card.innerHTML = `
                <div class="card mb-4 shadow-sm">
                <img src="${product.images[1]}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text fw-bold">$${product.price}</p>
                </div>
                </div>
            `;
            container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
})