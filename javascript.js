// Example product data (you can extend or fetch this data)
const products = [
  {
    id: 1,
    name: "Barista Pro Grinder",
    price: "$149.00",
    image: "https://via.placeholder.com/300x200",
    category: "Grinder",
  },
  // ... add more products as needed
];

let cart = [];
let currentProduct = null;

// Render products into the products grid
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  grid.innerHTML = products
    .map(
      (product) => `
    <div class="product-card" onclick="openModal(${product.id})">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Open product modal with details
function openModal(id) {
  currentProduct = products.find((p) => p.id === id);
  if (!currentProduct) return;
  document.getElementById("modalImage").src = currentProduct.image;
  document.getElementById("modalTitle").textContent = currentProduct.name;
  document.getElementById("modalPrice").textContent = currentProduct.price;
  document.getElementById("productModal").style.display = "flex";
}

// Close the modal
function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Add current product to cart
function addToCart(id) {
  const product = id ? products.find((p) => p.id === id) : currentProduct;
  if (product) {
    cart.push(product);
    updateCartCount();
    closeModal();
    alert("Item added to cart!");
  }
}

// Update the cart count display (if you add a cart element)
function updateCartCount() {
  // Implementation for updating the cart counter if needed
}

// Toggle mobile menu display
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("mainMenu").classList.toggle("active");
});

// Smooth scroll to sections
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Initialize products on page load
document.addEventListener("DOMContentLoaded", renderProducts);
