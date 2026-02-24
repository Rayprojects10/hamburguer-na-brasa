function renderMenu() {
    const menu = document.getElementById("menu");
    if (!menu) return;

    let html = "";
    products.forEach(product => {
        html += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${product.ingredients}</p>
                    <p class="price">${product.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>
                    <button class="order-btn" onclick="addToCart(${product.id})">Fazer Pedido</button>
                </div>
            </div>
        `;
    });
    menu.innerHTML = html;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}