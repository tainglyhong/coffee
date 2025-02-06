// Product Data (with category property)
const products = [
  {
    id: 1,
    name: "Barista Pro Grinder",
    price: "$149.00",
    image: "1.jpg",
    description: "Professional-grade coffee grinder with precise settings.",
    category: "Grinder",
  },
  {
    id: 2,
    name: "Digital Coffee Scale",
    price: "$59.00",
    image: "https://m.media-amazon.com/images/I/61y6z4C4wSL._AC_SL1500_.jpg",
    description: "High-precision scale for perfect coffee measurements.",
    category: "Scale",
  },
  {
    id: 3,
    name: "Pour Over Coffee Set",
    price: "$89.00",
    image: "https://m.media-amazon.com/images/I/81Z5+8-1wYL._AC_SL1500_.jpg",
    description: "Complete pour-over kit for coffee enthusiasts.",
    category: "Brew",
  },
  {
    id: 4,
    name: "Stainless Steel French Press",
    price: "$49.00",
    image: "https://m.media-amazon.com/images/I/71y1z+Z8HmL._AC_SL1500_.jpg",
    description: "Durable and stylish French press for rich coffee.",
    category: "Brew",
  },
  {
    id: 5,
    name: "Coffee Tamper",
    price: "$29.00",
    image: "https://m.media-amazon.com/images/I/71Z8Z8Z8Z8L._AC_SL1500_.jpg",
    description: "Professional coffee tamper for espresso lovers.",
    category: "Accessory",
  },
  {
    id: 6,
    name: "Milk Frother",
    price: "$39.00",
    image: "https://m.media-amazon.com/images/I/71Z8Z8Z8Z8L._AC_SL1500_.jpg",
    description: "Electric milk frother for creamy lattes and cappuccinos.",
    category: "Accessory",
  },
];

let cartItems = 0;
let cart = [];
let currentProduct = null;
let filteredProducts = [...products]; // Initially, all products

// Render Products Function
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "<p>No products found.</p>";
    return;
  }
  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
                <div class="product-card" onclick="openModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                        <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `
    )
    .join("");
}

// Filter Products by Category
function filterProducts(category) {
  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }
  renderProducts();
}

// Open Product Modal
function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  currentProduct = product;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;
  const modal = document.getElementById("productModal");
  modal.style.display = "flex";
  // Add fade-in effect
  const modalContent = modal.querySelector(".modal-content");
  modalContent.classList.remove("fade-out");
  modalContent.classList.add("fade-in");
}

// Close Product Modal with fade-out
function closeModal() {
  const modal = document.getElementById("productModal");
  const modalContent = modal.querySelector(".modal-content");
  modalContent.classList.remove("fade-in");
  modalContent.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

// Add to Cart
function addToCart(productId) {
  let product;
  if (productId) {
    product = products.find((p) => p.id === productId);
  } else {
    product = currentProduct;
    closeModal();
  }
  if (product) {
    cart.push(product);
    cartItems++;
    updateCartCount();
    showNotification("Item added to cart");
  }
}

// Update Cart Count Display
function updateCartCount() {
  document.getElementById("cartCount").textContent = cartItems;
}

// Show Notification for Adding Items with fade effect
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.position = "fixed";
  notification.style.bottom = "30px";
  notification.style.right = "30px";
  notification.style.backgroundColor = "var(--accent)";
  notification.style.color = "#ffffff";
  notification.style.padding = "1rem 2rem";
  notification.style.borderRadius = "8px";
  notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  notification.style.zIndex = "1000";
  notification.classList.add("fade-in");
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove("fade-in");
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 500);
  }, 2000);
}

// Open Cart Modal
function openCart() {
  const cartModal = document.getElementById("cartModal");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItemsList.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";
  } else {
    cartItemsList.innerHTML = cart
      .map(
        (item) =>
          `<div style="display:flex; justify-content: space-between; margin-bottom: 1rem;">
                  <span>${item.name}</span>
                  <span>${item.price}</span>
                </div>`
      )
      .join("");
    let total = cart.reduce((sum, item) => {
      return sum + parseFloat(item.price.replace("$", ""));
    }, 0);
    cartTotal.textContent = "Total: $" + total.toFixed(2);
  }
  cartModal.style.display = "flex";
  const modalContent = cartModal.querySelector(".modal-content");
  modalContent.classList.remove("fade-out");
  modalContent.classList.add("fade-in");
}

// Close Cart Modal with fade-out
function closeCart() {
  const cartModal = document.getElementById("cartModal");
  const modalContent = cartModal.querySelector(".modal-content");
  modalContent.classList.remove("fade-in");
  modalContent.classList.add("fade-out");
  setTimeout(() => {
    cartModal.style.display = "none";
  }, 500);
}

// Scroll to Sections when clicking "Explore Collection"
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
// Optionally, scroll to any section:
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Initialize Products (show all by default)
renderProducts();
