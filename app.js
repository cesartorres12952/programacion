// Datos de la Tienda
const PRODUCTS = [
  {
    id: 1,
    title: "Mango Kent Premium",
    price: 4.50,
    unit: "kg",
    category: "exoticas",
    rating: 4.9,
    description: "Mango cremoso de dulzura intensa y pulpa sin hebras.",
    badge: "Orgánico",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Arándanos Silvestres",
    price: 5.90,
    unit: "bandeja",
    category: "bayas",
    rating: 4.8,
    description: "Bayas silvestres ricas en antioxidantes cosechadas a mano.",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Caja Regalo 'Mix Tropical'",
    price: 24.90,
    unit: "caja",
    category: "packs",
    rating: 5.0,
    description: "Selección de lujo con piña, mango, maracuyá y frutas exóticas.",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1610832958506-ee563361c1e9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Naranjas de Jugo Dulces",
    price: 3.20,
    unit: "kg",
    category: "citricos",
    rating: 4.7,
    description: "Naranjas súper jugosas de piel fina, ideales para zumo fresco.",
    badge: "Fresco",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Frambuesas Orgánicas",
    price: 6.20,
    unit: "bandeja",
    category: "bayas",
    rating: 4.9,
    description: "Frambuesas frescas seleccionadas una a una, sabor dulce y ácido.",
    badge: "Destacado",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "Piña Golden Selecta",
    price: 3.80,
    unit: "unid",
    category: "exoticas",
    rating: 4.6,
    description: "Piña madura y aromática de pulpa amarilla muy dulce.",
    badge: "",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    title: "Pack Bienestar Familiar",
    price: 19.90,
    unit: "pack",
    category: "packs",
    rating: 4.8,
    description: "Surtido variado de frutas de temporada ideal para oficinas o familias.",
    badge: "Recomendado",
    image: "https://images.unsplash.com/photo-1519996521430-02b798c1d881?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    title: "Limones Premium",
    price: 2.50,
    unit: "kg",
    category: "citricos",
    rating: 4.5,
    description: "Limones con gran cantidad de zumo, perfectos para aderezos y jugos.",
    badge: "",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=600"
  }
];

const INGREDIENTS = [
  { id: 'mango', name: 'Mango', icon: '🥭', color: 'hsl(45, 95%, 55%)', calories: 60, price: 1.50 },
  { id: 'fresa', name: 'Fresa', icon: '🍓', color: 'hsl(355, 85%, 52%)', calories: 32, price: 1.80 },
  { id: 'pina', name: 'Piña', icon: '🍍', color: 'hsl(50, 90%, 60%)', calories: 50, price: 1.30 },
  { id: 'naranja', name: 'Naranja', icon: '🍊', color: 'hsl(28, 95%, 55%)', calories: 47, price: 1.20 },
  { id: 'arandano', name: 'Arándano', icon: '🫐', color: 'hsl(230, 60%, 45%)', calories: 57, price: 2.00 },
  { id: 'kiwi', name: 'Kiwi', icon: '🥝', color: 'hsl(95, 60%, 48%)', calories: 61, price: 1.60 }
];

// Estado de la Aplicación
let cart = [];
let selectedIngredients = [];

// Elementos DOM
document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("products-grid");
  const filterContainer = document.getElementById("filter-container");
  const cartIcon = document.getElementById("cart-icon");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartClose = document.getElementById("cart-close");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartBadge = document.getElementById("cart-badge");
  const cartTotalVal = document.getElementById("cart-total");
  const btnCheckout = document.getElementById("btn-checkout");
  const ingredientsGrid = document.getElementById("ingredients-grid");
  const juicePrice = document.getElementById("juice-price");
  const juiceCalories = document.getElementById("juice-calories");
  const btnAddJuice = document.getElementById("btn-add-juice");
  const glassContainer = document.getElementById("glass-container");
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");
  const modalCheckout = document.getElementById("modal-checkout");
  const btnCloseModal = document.getElementById("btn-close-modal");
  
  // HEADER SCROLL EFFECT
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // MENU MOVIL
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  // Cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // INICIALIZACIÓN
  renderProducts("all");
  renderIngredients();
  updateCartUI();

  // FILTROS DEL CATÁLOGO
  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      
      const filter = e.target.getAttribute("data-filter");
      renderProducts(filter);
    }
  });

  // RENDERIZAR PRODUCTOS
  function renderProducts(categoryFilter) {
    productsGrid.innerHTML = "";
    
    const filteredProducts = categoryFilter === "all" 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === categoryFilter);

    filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card animate-fade-in";
      
      const badgeHTML = product.badge 
        ? `<div class="product-badge">${product.badge}</div>` 
        : "";

      productCard.innerHTML = `
        ${badgeHTML}
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
        </div>
        <div class="product-details">
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
            <div class="product-rating">
              <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span>${product.rating}</span>
            </div>
          </div>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-footer">
            <div class="product-price">S/ ${product.price.toFixed(2)} <span>/ ${product.unit}</span></div>
            <button class="btn-add-cart" data-id="${product.id}" aria-label="Agregar al carrito">
              <svg viewBox="0 0 24 24"><path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7.9-3h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 8H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25z"/></svg>
            </button>
          </div>
        </div>
      `;

      productsGrid.appendChild(productCard);
    });

    // Agregar eventos a botones
    document.querySelectorAll(".btn-add-cart").forEach(button => {
      button.addEventListener("click", () => {
        const productId = parseInt(button.getAttribute("data-id"));
        addToCart(productId);
      });
    });
  }

  // RENDERIZAR INGREDIENTES PARA JUGOS
  function renderIngredients() {
    ingredientsGrid.innerHTML = "";
    INGREDIENTS.forEach(ing => {
      const card = document.createElement("div");
      card.className = "ingredient-card";
      card.setAttribute("data-id", ing.id);
      card.innerHTML = `
        <div class="ingredient-icon-circle">${ing.icon}</div>
        <div class="ingredient-name">${ing.name}</div>
        <div class="ingredient-cal">${ing.calories} kcal</div>
      `;

      card.addEventListener("click", () => toggleIngredient(ing.id));
      ingredientsGrid.appendChild(card);
    });
  }

  // SELECCIONAR INGREDIENTE PARA EL JUGO
  function toggleIngredient(id) {
    const index = selectedIngredients.indexOf(id);
    const card = document.querySelector(`.ingredient-card[data-id="${id}"]`);
    
    if (index > -1) {
      // Remover selección
      selectedIngredients.splice(index, 1);
      card.classList.remove("selected");
    } else {
      // Validar máximo 3 ingredientes
      if (selectedIngredients.length >= 3) {
        alert("¡Puedes combinar un máximo de 3 frutas para tu jugo!");
        return;
      }
      // Agregar selección
      selectedIngredients.push(id);
      card.classList.add("selected");
    }

    updateJuiceUI();
  }

  // ACTUALIZAR INTERFAZ DEL JUGUERO (WOW FACTOR)
  function updateJuiceUI() {
    let totalPrice = 4.00; // Base por la base de agua/leche e infraestructura
    let totalCalories = 80; // Calorías base del jugo
    
    // Eliminar capas de líquido anteriores
    const liquidLayers = glassContainer.querySelectorAll(".liquid-layer");
    liquidLayers.forEach(l => l.remove());

    if (selectedIngredients.length === 0) {
      juicePrice.textContent = "S/ 0.00";
      juiceCalories.textContent = "0 kcal";
      btnAddJuice.disabled = true;
      return;
    }

    btnAddJuice.disabled = false;
    const heightPercent = 100 / selectedIngredients.length;

    // Crear capas líquidas dinámicas apiladas visualmente
    selectedIngredients.forEach(ingId => {
      const ing = INGREDIENTS.find(i => i.id === ingId);
      totalPrice += ing.price;
      totalCalories += ing.calories;

      const layer = document.createElement("div");
      layer.className = "liquid-layer";
      layer.style.height = `${heightPercent}%`;
      layer.style.backgroundColor = ing.color;
      glassContainer.appendChild(layer);
    });

    juicePrice.textContent = `S/ ${totalPrice.toFixed(2)}`;
    juiceCalories.textContent = `${totalCalories} kcal`;
  }

  // BOTÓN AGREGAR JUGO AL CARRITO
  btnAddJuice.addEventListener("click", () => {
    if (selectedIngredients.length === 0) return;

    const names = selectedIngredients.map(id => INGREDIENTS.find(i => i.id === id).name).join(" + ");
    const totalPrice = 4.00 + selectedIngredients.reduce((acc, id) => acc + INGREDIENTS.find(i => i.id === id).price, 0);

    const customProduct = {
      id: `juice-${Date.now()}`,
      title: `Mix Jugo: ${names}`,
      price: totalPrice,
      unit: "vaso",
      description: "Jugo saludable preparado al instante con frutas selectas.",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200", // Unsplash juice fallback
      isCustomJuice: true
    };

    // Agregar al carrito
    const existingIndex = cart.findIndex(item => item.product.isCustomJuice && item.product.title === customProduct.title);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ product: customProduct, quantity: 1 });
    }

    // Reset Juicemaker
    selectedIngredients = [];
    document.querySelectorAll(".ingredient-card").forEach(c => c.classList.remove("selected"));
    updateJuiceUI();

    updateCartUI();
    openCart();
    
    // Animación feedback al botón del carrito
    const wrapper = document.querySelector(".cart-icon-wrapper");
    wrapper.style.transform = "scale(1.2)";
    setTimeout(() => {
      wrapper.style.transform = "scale(1)";
    }, 200);
  });

  // AGREGAR AL CARRITO PRODUCTOS DEL CATÁLOGO
  function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }

    updateCartUI();
    
    // Abrir automáticamente el carrito para mejor UX
    openCart();
  }

  // ABRIR / CERRAR CARRITO
  function openCart() {
    cartOverlay.classList.add("open");
  }

  function closeCart() {
    cartOverlay.classList.remove("open");
  }

  cartIcon.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) closeCart();
  });

  // ACTUALIZAR INTERFAZ DEL CARRITO
  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    
    let totalItems = 0;
    let grandTotal = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <p>Tu carrito de frescura está vacío.<br>¡Agrega algunas frutas orgánicas!</p>
        </div>
      `;
      btnCheckout.disabled = true;
    } else {
      btnCheckout.disabled = false;
      cart.forEach(item => {
        totalItems += item.quantity;
        const itemCost = item.product.price * item.quantity;
        grandTotal += itemCost;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
          <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.product.title}</h4>
            <div class="cart-item-price">S/ ${item.product.price.toFixed(2)}</div>
          </div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn decrease-qty" data-id="${item.product.id}">-</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn increase-qty" data-id="${item.product.id}">+</button>
          </div>
          <button class="cart-remove-btn" data-id="${item.product.id}" aria-label="Eliminar item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        `;

        cartItemsContainer.appendChild(cartItemDiv);
      });
    }

    // Actualizar Badge
    if (totalItems > 0) {
      cartBadge.textContent = totalItems;
      cartBadge.classList.add("show");
    } else {
      cartBadge.classList.remove("show");
    }

    // Actualizar Total
    cartTotalVal.textContent = `S/ ${grandTotal.toFixed(2)}`;

    // Manejar cantidad e incrementos/decrementos
    document.querySelectorAll(".increase-qty").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        changeQuantity(id, 1);
      });
    });

    document.querySelectorAll(".decrease-qty").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        changeQuantity(id, -1);
      });
    });

    document.querySelectorAll(".cart-remove-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        removeFromCart(id);
      });
    });
  }

  // MODIFICAR CANTIDAD DE PRODUCTOS EN EL CARRITO
  function changeQuantity(id, delta) {
    const item = cart.find(item => item.product.id == id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartUI();
    }
  }

  // ELIMINAR ITEM COMPLETAMENTE
  function removeFromCart(id) {
    cart = cart.filter(item => item.product.id != id);
    updateCartUI();
  }

  // PROCESAR CHECKOUT / COMPRA (WhatsApp)
  btnCheckout.addEventListener("click", () => {
    if (cart.length === 0) return;

    // Construcción del mensaje para WhatsApp
    let mensaje = "Hola Frutería TuVecindad, deseo realizar el siguiente pedido:\n\n";
    let total = 0;
    cart.forEach(item => {
      const sub = item.product.price * item.quantity;
      total += sub;
      mensaje += `• ${item.quantity}x ${item.product.title} - S/ ${sub.toFixed(2)}\n`;
    });
    mensaje += `\n*Total a pagar:* S/ ${total.toFixed(2)}`;
    mensaje += "\n\nPor favor, coordinar detalles de envío.";

    const waLink = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`;
    
    // Guardar link en el checkout modal
    const btnConfirmCheckout = document.getElementById("btn-confirm-checkout");
    btnConfirmCheckout.onclick = () => {
      window.open(waLink, "_blank");
      cart = [];
      updateCartUI();
      closeCart();
      modalCheckout.classList.remove("open");
    };

    modalCheckout.classList.add("open");
  });

  // Cerrar Modal
  btnCloseModal.addEventListener("click", () => {
    modalCheckout.classList.remove("open");
  });

  // FORMULARIO DE CONTACTO
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        alert("Por favor rellene todos los campos obligatorios.");
        return;
      }

      // Simular éxito de envío
      formSuccess.style.display = "block";
      contactForm.reset();

      setTimeout(() => {
        formSuccess.style.display = "none";
      }, 5000);
    });
  }
});
