const productsContainer = document.getElementById("products");

// Получение списка товаров с сервера
fetch("/api/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart('${product._id}')">Add to Cart</button>
            `;
            productsContainer.appendChild(productCard);
        });
    });

// Пример функции добавления в корзину
function addToCart(productId) {
    fetch(`/api/cart/${productId}`, { method: "POST" })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        });
}
