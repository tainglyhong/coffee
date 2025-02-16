// Sample product data with two items for every subcategory
const products = [
  // Coffee Beans
  {
    id: 1,
    name: "Organic Coffee Beans - Light Roast",
    price: "$20.00",
    image:
      "https://rhoadsroast-coffees.com/cdn/shop/products/3-lbs-papua-new-guinea-organic-estate-fresh-light-roast-100percent-arabica-coffee-beans-rhoadsroast-coffees-and-importers-1.jpg?v=1657587830",
    subCategory: "Coffee Beans",
  },
  {
    id: 2,
    name: "Organic Coffee Beans - Dark Roast",
    price: "$22.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZXcmaKigBQBSGEuShMhmAEPVf6A6AcLTDgPsGS1OEzJ9qiD99SEsav_xioQHq9B-_Xc&usqp=CAU",
    subCategory: "Coffee Beans",
  },
  // Single
  {
    id: 3,
    name: "Single Origin Espresso - Colombia",
    price: "$25.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80l_AHos5tFdmDnEGANxHVF4VgqODa_WQiyBUat0UaYnvmaYwBOE088UvVrONy_mvS2M&usqp=CAU",
    subCategory: "Single",
  },
  {
    id: 4,
    name: "Single Origin Espresso - Ethiopia",
    price: "$27.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpjijz70Mu7CauLnS60bmbkRaYMCSR4wEbhlr1x21a-VarUx7qV9oZTx11i7JmplzqZ4&usqp=CAU",
    subCategory: "Single",
  },
  // Origin
  {
    id: 5,
    name: "Ethiopian Origin Roast",
    price: "$22.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQhny7lH6xLQ1syZ_dtXgA5y-m-i-0Z9jCw&s",
    subCategory: "Origin",
  },
  {
    id: 6,
    name: "Brazilian Origin Roast",
    price: "$21.00",
    image:
      "https://coffeeroastco.com/cdn/shop/files/BrazilSingleOrigin_600x.png?v=1698115518",
    subCategory: "Origin",
  },
  // Blends
  {
    id: 7,
    name: "Signature Blend - Morning Mix",
    price: "$24.00",
    image:
      "https://www.aubut.ca/pictures/products/large/10631_coffee-beans-morning-mix.jpg",
    subCategory: "Blends",
  },
  {
    id: 8,
    name: "Signature Blend - Evening Espresso",
    price: "$26.00",
    image:
      "https://macchina.com.au/cdn/shop/files/Signature1kg.png?v=1710315971&width=533",
    subCategory: "Blends",
  },
  // Decaf
  {
    id: 9,
    name: "Decaf Delight - Mild Roast",
    price: "$23.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLcojwBG61YFEEC8Cnw0k6W7v6gvL4b0BgA&s",
    subCategory: "Decaf",
  },
  {
    id: 10,
    name: "Decaf Delight - Bold Roast",
    price: "$24.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43D7aH93DKGuw6Vy7roHYoevEasB9A82s1A&s",
    subCategory: "Decaf",
  },
  // Accessories
  {
    id: 11,
    name: "Coffee Accessories Set - Starter Kit",
    price: "$30.00",
    image:
      "https://dipacci.com.au/cdn/shop/files/junnie-coffee-accessories-starter-pack-di-pacci-459.webp?v=1701997034",
    subCategory: "Accessories",
  },
  {
    id: 12,
    name: "Coffee Accessories Set - Pro Kit",
    price: "$45.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1gVH2HkZapuBKlQO5JoCX0steATgNDe6Uw&s",
    subCategory: "Accessories",
  },
  // Cups & Lids
  {
    id: 13,
    name: "Designer Cup - Matte Finish",
    price: "$18.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JSxL-YUweFw90qRndUhhZHpsSedjT5T74g&s",
    subCategory: "Cups & Lids",
  },
  {
    id: 14,
    name: "Designer Cup - Glossy Finish",
    price: "$20.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOz2lbeX3rC31gCOwBc8cimIRXaPbg8SERQ&s",
    subCategory: "Cups & Lids",
  },
  // Filters
  {
    id: 15,
    name: "Premium Coffee Filter - Paper",
    price: "$12.00",
    image:
      "https://m.media-amazon.com/images/I/61QClHhXt4L._AC_UF350,350_QL80_.jpg",
    subCategory: "Filters",
  },
  {
    id: 16,
    name: "Premium Coffee Filter - Metal",
    price: "$15.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSKqZmCfR24o524DC7rZQnc4ahue4NnV19Q&s",
    subCategory: "Filters",
  },
  // Grinders & Equipment
  {
    id: 17,
    name: "High-End Grinder - Model A",
    price: "$150.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf83YlnJAZwPWckxf3zgALQtaNwr6p3wd21Q&s",
    subCategory: "Grinders & Equipment",
  },
  {
    id: 18,
    name: "High-End Grinder - Model B",
    price: "$180.00",
    image:
      "https://cdnimg.webstaurantstore.com/images/products/large/775646/2649352.jpg",
    subCategory: "Grinders & Equipment",
  },
];

let cart = [];
let currentProduct = null;
let filteredProducts = [...products]; // Start with all products

// Render product cards based on filteredProducts array
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  if (filteredProducts.length === 0) {
    grid.innerHTML = "<p>No products found in this category.</p>";
    return;
  }
  grid.innerHTML = filteredProducts
    .map(
      (product) => `
    <div class="product-card" onclick="openModal(${product.id})">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Filter products based on the provided sub-category
function filterProducts(category) {
  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((p) => p.subCategory === category);
  }
  renderProducts();
}

// Open the modal with product details
function openModal(id) {
  currentProduct = products.find((p) => p.id === id);
  if (!currentProduct) return;
  document.getElementById("modalImage").src = currentProduct.image;
  document.getElementById("modalTitle").textContent = currentProduct.name;
  document.getElementById("modalPrice").textContent = currentProduct.price;
  document.getElementById("productModal").style.display = "flex";
}

// Close the product modal
function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Add a product to the cart
function addToCart(id) {
  const product = id ? products.find((p) => p.id === id) : currentProduct;
  if (product) {
    cart.push(product);
    updateCartCount();
    closeModal();
    alert("Item added to cart!");
  }
}

// Optional: Update a cart counter (if you add a display element)
function updateCartCount() {
  // Implementation can be added here
}

// Close the cart modal (if you are using one)
function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

// Toggle the mobile menu
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("active");
});

// Smooth scroll to sections by ID
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Attach event listeners to sub-menu (dropdown) links for filtering
document.querySelectorAll(".dropdown-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.getAttribute("data-category");
    filterProducts(category);
  });
});

// Initialize products on document ready
document.addEventListener("DOMContentLoaded", renderProducts);
