document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.product .item');
    const cart = document.querySelector('.cart');

    let cartItems = [];

    // Function to update cart display
    function updateCartDisplay() {
        if (cartItems.length === 0) {
            cart.innerHTML = "<p>No Product added to the cart</p>";
        } else {
            cart.innerHTML = "";
            cartItems.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.innerHTML = `<p>${item.name} x ${item.quantity}</p>`;
                cart.appendChild(cartItemElement);
            });
        }
    }

    // Function to add item to cart
    function addToCart(productId) {
        const existingItemIndex = cartItems.findIndex(item => item.id === productId);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity++;
        } else {
            cartItems.push({ id: productId, name: `Product ${productId}`, quantity: 1 });
        }
        updateCartDisplay();
    }

    // Function to remove item from cart
    function removeFromCart(productId) {
        const existingItemIndex = cartItems.findIndex(item => item.id === productId);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity--;
            if (cartItems[existingItemIndex].quantity === 0) {
                cartItems.splice(existingItemIndex, 1);
            }
        }
        updateCartDisplay();
    }

    // Event listeners for buttons
    products.forEach(product => {
        const productId = parseInt(product.id.split('-')[1]);
        const plusButton = product.querySelector('.plus');
        const minusButton = product.querySelector('.minus');

        plusButton.addEventListener('click', () => addToCart(productId));
        minusButton.addEventListener('click', () => removeFromCart(productId));
    });

    // Initialize cart display
    updateCartDisplay();
});
