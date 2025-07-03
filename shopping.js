// Get elements from the page
const itemBox = document.getElementById('cart-items');  // Where cart items will show
const totalBox = document.getElementById('cart-total'); // Where total price will show
const orderBtn = document.getElementById('order-btn');  // "Order Now" button

let total = 0; // Start with total = 0

// For every "Add to Cart" button on products
document.querySelectorAll('.addtocart').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Stop page from refreshing

    // Get item name and price from the button
    const name = this.dataset.name;
    const price = parseInt(this.dataset.price); // Convert text price to number

    // Create a new list item in the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - Rs ${price}`;
    itemBox.appendChild(listItem); // Add the item to the cart

    // Add price to total and update the total display
    total += price;
    totalBox.textContent = `Rs ${total}`;

    // Show the "Order Now" button if cart is not empty
    if (total > 0) {
      orderBtn.style.display = 'block';
    }
  });
});

// When "Order Now" button is clicked
orderBtn.addEventListener('click', function() {
  alert('Your order has been successfully placed!'); // Show success message

  // Clear cart items and total
  itemBox.innerHTML = '';
  total = 0;
  totalBox.textContent = 'Rs 0';

  // Hide the "Order Now" button again
  orderBtn.style.display = 'none';
});

// Dark Mode Toggle Function
function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector('.mode-toggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    button.innerHTML = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    button.innerHTML = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const darkMode = localStorage.getItem('darkMode');
  const button = document.querySelector('.mode-toggle');
  
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    button.innerHTML = '☀️ Light Mode';
  }
});
