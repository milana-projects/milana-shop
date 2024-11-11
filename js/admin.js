const products = JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: "Розы", price: 500, image: "assets/images/roses.png" },
    { id: 2, name: "Тюльпаны", price: 300, image: "assets/images/tulips.png" },
    { id: 3, name: "Хризантемы", price: 400, image: "assets/images/chrysanthemums.png" },
    { id: 4, name: "Лилии", price: 600, image: "assets/images/lilies.png" },
    { id: 5, name: "Орхидеи", price: 1000, image: "assets/images/orchids.png" },
  ];
  
  function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  function renderAdminProductList() {
    const productListAdmin = document.getElementById('product-list-admin');
    productListAdmin.innerHTML = '';
  
    products.forEach((product, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: auto;"></td>
        <td><input type="text" value="${product.name}" data-index="${index}" class="edit-name"></td>
        <td><input type="number" value="${product.price}" data-index="${index}" class="edit-price"></td>
        <td><button class="save-btn" data-index="${index}">Сохранить</button></td>
      `;
      productListAdmin.appendChild(row);
    });
  }
  
  document.addEventListener('input', (event) => {
    if (event.target.classList.contains('edit-name')) {
      const index = event.target.dataset.index;
      products[index].name = event.target.value;
    }
  
    if (event.target.classList.contains('edit-price')) {
      const index = event.target.dataset.index;
      products[index].price = parseInt(event.target.value, 10);
    }
  });
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('save-btn')) {
      saveProducts();
      alert('Изменения сохранены!');
    }
  });
  
  renderAdminProductList();
  