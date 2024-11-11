const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const processOrderButton = document.getElementById('process-order');
const clearCartButton = document.getElementById('clear-cart');

// Проверяем состояние корзины и дизейблим кнопки, если корзина пуста
if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Корзина пуста</p>';
    processOrderButton.disabled = true; // Делаем кнопку "Получить заказ" неактивной
    clearCartButton.disabled = true; // Делаем кнопку "Очистить корзину" неактивной
} else {
    cartItemsContainer.style.display = 'flex'; // Устанавливаем горизонтальное отображение
    cartItemsContainer.style.gap = '1rem'; // Расстояние между товарами
    cartItemsContainer.style.flexWrap = 'wrap'; // Перенос на новую строку при необходимости

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product';
        itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 100%; height: auto;">
      <h2>${item.name}</h2>
      <p>Цена: ${item.price} руб.</p>
    `;
        cartItemsContainer.appendChild(itemDiv);
    });

    processOrderButton.disabled = false; // Активируем кнопку "Получить заказ"
    clearCartButton.disabled = false; // Активируем кнопку "Очистить корзину"
}

// Обрабатываем кнопку "Получить заказ"
processOrderButton.addEventListener('click', () => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0); // Считаем сумму
    alert(`Сумма вашего заказа ${totalAmount} рублей, спасибо за заказ!`);
    localStorage.removeItem('cart'); // Очищаем корзину после выдачи заказа
    location.reload(); // Обновляем страницу, чтобы отобразить пустую корзину
});

// Обрабатываем кнопку "Очистить корзину"
clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart'); // Удаляем все товары из корзины
    location.reload(); // Обновляем страницу
});
