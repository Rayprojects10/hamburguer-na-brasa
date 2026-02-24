let cart = [];

window.onload = function() {
    renderMenu();

    const savedUser = localStorage.getItem("user");
    if(savedUser){
        const userName = document.getElementById("userName");
        if(userName) userName.innerText = savedUser;
    }
}

function showSection(sectionId){
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    const section = document.getElementById(sectionId);
    if(section) section.classList.add("active");
}

function addToCart(id){
    const product = products.find(p => p.id === id);
    if(product){
        cart.push(product);
        updateCart();
        alert(product.name + " adicionado ao carrinho!");
    }
}

function updateCart(){
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    if(!cartItems || !cartTotal || !cartCount) return;

    let html = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        html += `<p>${item.name} - ${item.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>`;
    });

    cartItems.innerHTML = html;
    cartTotal.innerText = "Total: " + total.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
    cartCount.innerText = cart.length;
}

function login(){
    const name = prompt("Digite seu nome:");
    if(name && name.trim() !== ""){
        localStorage.setItem("user",name);
        const userName = document.getElementById("userName");
        if(userName) userName.innerText = name;
    }
}