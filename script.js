/* =========================================
   STYLEHUB - JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        id: 1,
        name: "Classic Oxford Shirt",
        category: "Men",
        price: 1499,
        oldPrice: 1999,
        color: "White",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 124,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
        description:
            "A timeless Oxford shirt designed with a clean silhouette and premium cotton fabric. Perfect for work, weekends and everything in between."
    },

    {
        id: 2,
        name: "Satin Evening Dress",
        category: "Women",
        price: 2499,
        oldPrice: 3299,
        color: "Pink",
        sizes: ["S", "M", "L"],
        rating: 4.9,
        reviews: 98,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80",
        description:
            "An elegant satin dress with a graceful silhouette, designed for evening occasions and special moments."
    },

    {
        id: 3,
        name: "Relaxed Straight Jeans",
        category: "Men",
        price: 1899,
        oldPrice: 2499,
        color: "Blue",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 86,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
        description:
            "Relaxed straight-fit denim made for everyday comfort. A versatile essential for casual styling."
    },

    {
        id: 4,
        name: "Minimal Blazer",
        category: "Women",
        price: 2899,
        oldPrice: 3799,
        color: "Beige",
        sizes: ["S", "M", "L"],
        rating: 4.8,
        reviews: 71,
        badge: "EDITOR'S PICK",
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=700&q=80",
        description:
            "A structured minimalist blazer that adds polished sophistication to both formal and casual outfits."
    },

    {
        id: 5,
        name: "Essential Black Tee",
        category: "Men",
        price: 799,
        oldPrice: 999,
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 210,
        badge: "ESSENTIAL",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
        description:
            "A premium everyday black T-shirt with a comfortable fit and soft-touch cotton construction."
    },

    {
        id: 6,
        name: "Floral Midi Dress",
        category: "Women",
        price: 2199,
        oldPrice: 2899,
        color: "Pink",
        sizes: ["S", "M", "L"],
        rating: 4.8,
        reviews: 154,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80",
        description:
            "A feminine floral midi dress designed with a relaxed silhouette and lightweight fabric."
    },

    {
        id: 7,
        name: "Kids Denim Jacket",
        category: "Kids",
        price: 1299,
        oldPrice: 1699,
        color: "Blue",
        sizes: ["S", "M", "L"],
        rating: 4.7,
        reviews: 62,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
        description:
            "A playful denim jacket made for kids who love comfortable and stylish everyday clothing."
    },

    {
        id: 8,
        name: "Classic White Sneakers",
        category: "Women",
        price: 1999,
        oldPrice: 2599,
        color: "White",
        sizes: ["S", "M", "L"],
        rating: 4.9,
        reviews: 188,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
        description:
            "Clean and versatile sneakers designed to pair effortlessly with your everyday wardrobe."
    },

    {
        id: 9,
        name: "Premium Beige Hoodie",
        category: "Kids",
        price: 1099,
        oldPrice: 1399,
        color: "Beige",
        sizes: ["S", "M", "L"],
        rating: 4.6,
        reviews: 54,
        badge: "COMFY",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80",
        description:
            "Soft, warm and easy to style, this hoodie is designed for comfortable everyday wear."
    },

    {
        id: 10,
        name: "Tailored Black Trousers",
        category: "Women",
        price: 1799,
        oldPrice: 2299,
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 91,
        badge: "SMART EDIT",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
        description:
            "Tailored trousers with a clean silhouette that works effortlessly from office hours to evening plans."
    },

    {
        id: 11,
        name: "Pastel Summer Shirt",
        category: "Men",
        price: 1199,
        oldPrice: 1599,
        color: "Blue",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 73,
        badge: "SUMMER",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80",
        description:
            "A lightweight summer shirt in a soft pastel tone, perfect for relaxed warm-weather styling."
    },

    {
        id: 12,
        name: "Soft Pink Kids Dress",
        category: "Kids",
        price: 999,
        oldPrice: 1299,
        color: "Pink",
        sizes: ["S", "M", "L"],
        rating: 4.8,
        reviews: 48,
        badge: "CUTE PICK",
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=700&q=80",
        description:
            "A comfortable and charming dress designed for little ones and their special occasions."
    }

];


/* =========================================
   APPLICATION STATE
========================================= */

let cart = JSON.parse(localStorage.getItem("stylehubCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("stylehubWishlist")) || [];

let currentCategory = "All";

let selectedProduct = null;

let selectedSize = "M";

let selectedColor = null;

let discount = 0;


/* =========================================
   DOM ELEMENTS
========================================= */

const productGrid =
    document.getElementById("productGrid");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");

const cartItems =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const shippingCost =
    document.getElementById("shippingCost");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const toast =
    document.getElementById("toast");


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts();

    updateCart();

    updateWishlist();

    setupEvents();

});


/* =========================================
   EVENT LISTENERS
========================================= */

function setupEvents() {

    /* Category tabs */

    document.querySelectorAll(".tab").forEach(tab => {

        tab.addEventListener("click", () => {

            document
                .querySelectorAll(".tab")
                .forEach(item => item.classList.remove("active"));

            tab.classList.add("active");

            currentCategory =
                tab.dataset.category;

            renderProducts();

        });

    });


    /* Size filter */

    document
        .getElementById("sizeFilter")
        .addEventListener("change", renderProducts);


    /* Color filter */

    document
        .getElementById("colorFilter")
        .addEventListener("change", renderProducts);


    /* Price filter */

    document
        .getElementById("priceFilter")
        .addEventListener("change", renderProducts);


    /* Search */

    document
        .getElementById("searchBtn")
        .addEventListener("click", () => {

            document
                .getElementById("searchContainer")
                .classList.toggle("active");

            document
                .getElementById("searchInput")
                .focus();

        });


    document
        .getElementById("searchClose")
        .addEventListener("click", () => {

            document
                .getElementById("searchContainer")
                .classList.remove("active");

        });


    document
        .getElementById("searchInput")
        .addEventListener("input", renderProducts);


    /* Cart */

    document
        .getElementById("cartBtn")
        .addEventListener("click", openCart);


    document
        .getElementById("cartOverlay")
        .addEventListener("click", closeCart);


    /* Login */

    document
        .getElementById("loginBtn")
        .addEventListener("click", () => {

            openModal("loginModal");

        });


    /* Checkout */

    document
        .getElementById("checkoutBtn")
        .addEventListener("click", openCheckout);


    /* Coupon */

    document
        .getElementById("couponBtn")
        .addEventListener("click", applyCoupon);


    /* Newsletter */

    document
        .getElementById("newsletterForm")
        .addEventListener("submit", event => {

            event.preventDefault();

            showToast(
                "Thank you for subscribing to StyleHub!"
            );

            event.target.reset();

        });


    /* Checkout */

    document
        .getElementById("checkoutForm")
        .addEventListener("submit", placeOrder);


    /* Login */

    document
        .getElementById("loginForm")
        .addEventListener("submit", loginUser);


    /* Wishlist nav */

    document
        .getElementById("wishlistNavBtn")
        .addEventListener("click", () => {

            currentCategory = "All";

            document
                .getElementById("shop")
                .scrollIntoView({
                    behavior: "smooth"
                });

            showToast(
                `You have ${wishlist.length} wishlist item(s).`
            );

        });

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

    const size =
        document.getElementById("sizeFilter").value;

    const color =
        document.getElementById("colorFilter").value;

    const price =
        document.getElementById("priceFilter").value;

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    let filtered = products.filter(product => {

        const categoryMatch =
            currentCategory === "All" ||
            product.category === currentCategory;


        const sizeMatch =
            size === "All" ||
            product.sizes.includes(size);


        const colorMatch =
            color === "All" ||
            product.color === color;


        const priceMatch =
            price === "All" ||
            product.price <= Number(price);


        const searchMatch =
            !search ||
            product.name
                .toLowerCase()
                .includes(search) ||
            product.category
                .toLowerCase()
                .includes(search);


        return (
            categoryMatch &&
            sizeMatch &&
            colorMatch &&
            priceMatch &&
            searchMatch
        );

    });


    if (filtered.length === 0) {

        productGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try changing your filters or search.</p>
            </div>
        `;

        return;

    }


    productGrid.innerHTML =
        filtered.map(product => createProductCard(product)).join("");

}


/* =========================================
   PRODUCT CARD
========================================= */

function createProductCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);

    return `

        <article class="product-card">

            <div
                class="product-image"
                onclick="openProduct(${product.id})"
                style="cursor:pointer"
            >

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    class="wishlist-btn ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(event, ${product.id})"
                    aria-label="Add to wishlist"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ★★★★★
                    <span>
                        ${product.rating} (${product.reviews})
                    </span>
                </div>


                <div class="product-price">

                    <strong>
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>

                </div>


                <button
                    class="add-cart"
                    onclick="quickAdd(${product.id})"
                >
                    ADD TO CART
                </button>

            </div>

        </article>

    `;

}


/* =========================================
   OPEN PRODUCT DETAILS
========================================= */

function openProduct(productId) {

    selectedProduct =
        products.find(product => product.id === productId);

    selectedSize =
        selectedProduct.sizes[0];

    selectedColor =
        selectedProduct.color;


    const modalContent =
        document.getElementById("productModalContent");


    modalContent.innerHTML = `

        <div class="product-detail">

            <div class="product-detail-image">

                <img
                    src="${selectedProduct.image}"
                    alt="${selectedProduct.name}"
                >

            </div>


            <div class="product-detail-info">

                <span class="eyebrow">
                    ${selectedProduct.category} COLLECTION
                </span>

                <h2>
                    ${selectedProduct.name}
                </h2>

                <div class="rating">
                    ★★★★★
                    <span>
                        ${selectedProduct.rating}
                        (${selectedProduct.reviews} reviews)
                    </span>
                </div>

                <div class="detail-price">
                    ₹${selectedProduct.price.toLocaleString("en-IN")}
                </div>

                <p class="detail-description">
                    ${selectedProduct.description}
                </p>


                <div class="option-title">
                    SELECT SIZE
                </div>

                <div class="size-options">

                    ${selectedProduct.sizes.map(size => `

                        <button
                            class="size-option ${
                                size === selectedSize
                                    ? "selected"
                                    : ""
                            }"
                            onclick="selectSize('${size}')"
                        >
                            ${size}
                        </button>

                    `).join("")}

                </div>


                <div class="option-title">
                    COLOR
                </div>

                <div class="color-options">

                    <button
                        class="color-option selected"
                    >
                        ${selectedProduct.color}
                    </button>

                </div>


                <button
                    class="detail-add"
                    onclick="addSelectedProductToCart()"
                >
                    ADD TO CART — ₹${selectedProduct.price.toLocaleString("en-IN")}
                </button>

            </div>

        </div>

    `;


    openModal("productModal");

}


/* =========================================
   SELECT SIZE
========================================= */

function selectSize(size) {

    selectedSize = size;

    document
        .querySelectorAll(".size-option")
        .forEach(button => {

            button.classList.toggle(
                "selected",
                button.textContent.trim() === size
            );

        });

}


/* =========================================
   ADD SELECTED PRODUCT
========================================= */

function addSelectedProductToCart() {

    if (!selectedProduct) {
        return;
    }

    addToCart(
        selectedProduct.id,
        selectedSize,
        selectedProduct.color
    );

    closeModal("productModal");

}


/* =========================================
   QUICK ADD
========================================= */

function quickAdd(productId) {

    const product =
        products.find(item => item.id === productId);

    addToCart(
        productId,
        product.sizes[0],
        product.color
    );

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId, size, color) {

    const product =
        products.find(item => item.id === productId);

    const existing =
        cart.find(item =>
            item.id === productId &&
            item.size === size &&
            item.color === color
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: productId,

            name: product.name,

            price: product.price,

            image: product.image,

            size: size,

            color: color,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}


/* =========================================
   CART UPDATE
========================================= */

function updateCart() {

    const totalQuantity =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛍</div>

                <h3>Your cart is empty</h3>

                <p>Add something you love.</p>

            </div>

        `;

    } else {

        cartItems.innerHTML =
            cart.map(createCartItem).join("");

    }


    const subtotal =
        cart.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );


    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= 999
                ? 0
                : 99;


    const total =
        subtotal + shipping - discount;


    cartSubtotal.textContent =
        `₹${subtotal.toLocaleString("en-IN")}`;


    shippingCost.textContent =
        shipping === 0
            ? "FREE"
            : `₹${shipping}`;


    cartTotal.textContent =
        `₹${Math.max(total, 0).toLocaleString("en-IN")}`;


    checkoutTotal.textContent =
        `₹${Math.max(total, 0).toLocaleString("en-IN")}`;


    localStorage.setItem(
        "stylehubCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   CREATE CART ITEM
========================================= */

function createCartItem(item) {

    return `

        <div class="cart-item">

            <img
                src="${item.image}"
                alt="${item.name}"
            >


            <div>

                <h4>${item.name}</h4>

                <p>
                    Size: ${item.size}
                    • Color: ${item.color}
                </p>

                <span class="cart-item-price">
                    ₹${item.price.toLocaleString("en-IN")}
                </span>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            '${item.size}',
                            '${item.color}',
                            -1
                        )"
                    >
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            '${item.size}',
                            '${item.color}',
                            1
                        )"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(
                    ${item.id},
                    '${item.size}',
                    '${item.color}'
                )"
            >
                Remove
            </button>

        </div>

    `;

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(
    productId,
    size,
    color,
    change
) {

    const item =
        cart.find(cartItem =>
            cartItem.id === productId &&
            cartItem.size === size &&
            cartItem.color === color
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(cartItem =>
                !(
                    cartItem.id === productId &&
                    cartItem.size === size &&
                    cartItem.color === color
                )
            );

    }


    saveCart();

    updateCart();

}


/* =========================================
   REMOVE CART ITEM
========================================= */

function removeFromCart(
    productId,
    size,
    color
) {

    cart =
        cart.filter(item =>
            !(
                item.id === productId &&
                item.size === size &&
                item.color === color
            )
        );


    saveCart();

    updateCart();

    showToast("Item removed from cart");

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "stylehubCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(event, productId) {

    event.stopPropagation();


    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(id => id !== productId);

        showToast("Removed from wishlist");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist");

    }


    localStorage.setItem(
        "stylehubWishlist",
        JSON.stringify(wishlist)
    );


    updateWishlist();

    renderProducts();

}


function updateWishlist() {

    wishlistCount.textContent =
        wishlist.length;

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterCategory(category) {

    currentCategory = category;


    document
        .querySelectorAll(".tab")
        .forEach(tab => {

            tab.classList.toggle(
                "active",
                tab.dataset.category === category
            );

        });


    renderProducts();


    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   SEARCH
========================================= */

function searchProducts(value) {

    document
        .getElementById("searchInput")
        .value = value;

    renderProducts();

}


/* =========================================
   CART OPEN / CLOSE
========================================= */

function openCart() {

    document
        .getElementById("cartDrawer")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartDrawer")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


/* =========================================
   MODALS
========================================= */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   CHECKOUT
========================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    closeCart();

    updateCart();

    openModal("checkoutModal");

}


/* =========================================
   COUPON
========================================= */

function applyCoupon() {

    const coupon =
        document
            .getElementById("couponInput")
            .value
            .trim()
            .toUpperCase();

    const message =
        document.getElementById("couponMessage");


    if (coupon === "STYLE20") {

        const subtotal =
            cart.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            );

        discount =
            Math.round(subtotal * 0.20);

        message.textContent =
            "Coupon applied! You saved 20%.";

        message.style.color =
            "#1a8f5b";

        updateCart();

    } else {

        discount = 0;

        message.textContent =
            "Invalid coupon. Try STYLE20.";

        message.style.color =
            "#e91e63";

        updateCart();

    }

}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    closeModal("checkoutModal");


    cart = [];

    discount = 0;

    saveCart();

    updateCart();


    showToast(
        "Order placed successfully! Thank you for shopping with StyleHub."
    );


    event.target.reset();

}


/* =========================================
   LOGIN
========================================= */

function loginUser(event) {

    event.preventDefault();

    closeModal("loginModal");

    showToast(
        "Login successful! Welcome to StyleHub."
    );

    event.target.reset();

}


/* =========================================
   SCROLL TO SHOP
========================================= */

function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", event => {

    if (event.target.classList.contains("modal")) {

        event.target.classList.remove("active");

        document.body.style.overflow = "";

    }

});


/* =========================================
   MOBILE MENU
========================================= */

document
    .getElementById("mobileMenu")
    .addEventListener("click", () => {

        const nav =
            document.querySelector(".nav-links");


        if (nav.style.display === "flex") {

            nav.style.display = "none";

        } else {

            nav.style.display = "flex";

            nav.style.position = "absolute";
            nav.style.top = "70px";
            nav.style.left = "0";
            nav.style.right = "0";

            nav.style.background = "white";

            nav.style.padding = "25px";

            nav.style.flexDirection = "column";

            nav.style.borderBottom =
                "1px solid #eee";

        }

    });