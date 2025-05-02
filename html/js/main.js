document.addEventListener('DOMContentLoaded', () => {
    const btnLoad = document.getElementById("btnLoad");
    const contTarjetas = document.getElementById("contTarjetas");
    const URL = "https://api.escuelajs.co/api/v1/products";

    btnLoad.addEventListener('click', () => {
        fetch(URL)
        .then(response => response.json())
        .then(products => {
          contTarjetas.innerHTML = ""; 
  
          products.forEach(product => {
            const col = document.createElement("div");
            col.className = "col";
  
            col.innerHTML = `
              <div class="card shadow-sm">
                <img src="${product.images[0]}" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}...</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-body-secondary">$${product.price}</small>
                  </div>
                </div>
              </div>
            `;
  
            contTarjetas.appendChild(col);
          });
        })
        .catch(error => {
          console.error("Error loading products:", error);
        });
    });
});