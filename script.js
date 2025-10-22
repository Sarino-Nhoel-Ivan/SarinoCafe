document.addEventListener("DOMContentLoaded", function () {
    const colors = ["#6F4E37", "#CBB994", "#A67B5B", "#4B3832", "#D9B382"];

    // -------------------------------
    // MOBILE NAVIGATION TOGGLE
    // -------------------------------
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // Change hamburger icon
            if (navMenu.classList.contains('active')) {
                mobileMenuToggle.innerHTML = '✕';
            } else {
                mobileMenuToggle.innerHTML = '☰';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '☰';
            }
        });
        
        // Close menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '☰';
            }
        });
    }

    // -------------------------------
    // HEADING COLOR CHANGE
    // -------------------------------
    const homeHeading = document.querySelector(".hero-content h1");
    if (homeHeading) {
        homeHeading.addEventListener("click", function () {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            homeHeading.style.color = randomColor;
        });
    }

    const aboutHeading = document.querySelector(".about-content h1");
    if (aboutHeading) {
        aboutHeading.addEventListener("click", function () {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            aboutHeading.style.color = randomColor;
        });
    }

    const contactHeading = document.querySelector(".contact-content h1");
    if (contactHeading) {
        contactHeading.addEventListener("click", function () {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            contactHeading.style.color = randomColor;
        });
    }

    const shopHeading = document.getElementById("shop-heading");
    if (shopHeading) {
        shopHeading.addEventListener("click", function () {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            shopHeading.style.color = randomColor;
        });
    }

    // -------------------------------
    // ADD TO CART FUNCTIONALITY
    // -------------------------------
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    const cartIcon = document.getElementById("cart-icon");

    function updateCartCount() {
        let totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalQty;
    }
    updateCartCount();

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Redirect to checkout page when clicking cart icon
    if (cartIcon) {
        cartIcon.addEventListener("click", function () {
            window.location.href = "checkout.html";
        });
    }
});
