// Получаем товары из localStorage или используем начальные значения
const products = JSON.parse(localStorage.getItem('products')) || [
  { id: 1, name: "Розы", price: 500, image: "assets/images/roses.png" },
  { id: 2, name: "Тюльпаны", price: 300, image: "assets/images/tulips.png" },
  { id: 3, name: "Хризантемы", price: 400, image: "assets/images/chrysanthemums.png" },
  { id: 4, name: "Лилии", price: 600, image: "assets/images/lilies.png" },
  { id: 5, name: "Орхидеи", price: 1000, image: "assets/images/orchids.png" },
];
  

// Получаем корзину из localStorage или создаем пустую
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для обновления корзины в localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        alert(`${product.name} добавлен в корзину!`);
    }
}

// Генерация списка товаров
const productList = document.getElementById("product-list");
products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto;">
    <h2>${product.name}</h2>
    <p>Цена: ${product.price} руб.</p>
    <button onclick="addToCart(${product.id})">Добавить в корзину</button>
  `;
  productList.appendChild(productDiv);
});
