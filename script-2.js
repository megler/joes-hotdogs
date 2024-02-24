window.onload = event => {
  // JSON
  let menu = {
    "foodMenu": [
      {
        "hotdogs": 4
      }, {
        "fries": 3.5
      }, {
        "soda": 1.5
      }, {
        "sauerkraut": 1
      }
    ]
  };

  // shopping cart JSON
  let cart = {
    "items": [
      {
        "hotdogs": 0
      }, {
        "fries": 0
      }, {
        "soda": 0
      }, {
        "sauerkraut": 0
      }
    ]
  };

  // We haven't covered formal objects yet. Using what came from this week's class.
  // This is a holder for anything added to the cart. Will use it as an associative
  // array further down.
  let cartItems = [];

  // Show menu with JSON
  document.getElementById("menu-1").innerHTML = '<ul id="menu-list"></ul>';

  menu.foodMenu.forEach(item => {
    const menuItem = Object.keys(item)[0];
    const menuPrice = item[menuItem];
    document.getElementById("menu-list").innerHTML += `<li>${menuItem}: $${menuPrice.toFixed(2)}</li>`;
  });

  //Listen for user input in the shopping cart
  document.getElementById("addToCart").addEventListener("click", function () {
    const itemName = document.getElementById("itemName").value.toLowerCase();

    // If input matches menu item, increment quantity by 1
    cart.items.forEach(item => {
      if (itemName in item) {
        item[itemName] += 1;
      }
    });

    // Add to cartItems as associative array
    cart.items.forEach(item => {
      for (let key in item) {
        cartItems[key] = item[key];
      }
    });

    let cartContents = "";

    // Display cart items with quantity > 0 on page
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        cartContents += `${item} quantity: ${cartItems[item]}<br />`;
      }
    }

    document.getElementById("items-in-cart").innerHTML = cartContents;
  });

  // Listen for Checkout
  document.getElementById("checkout").addEventListener("click", function () {
    let totalSum = 0;
    let alertMessage = "Order Summary:\n";

    // Iterate through cart items to calculate total and build alert message
    cart.items.forEach(item => {
      for (let key in item) {
        if (item[key] > 0) {
          // Find the matching menu item to get the price
          const menuItem = menu.foodMenu.find(menuItem => menuItem.hasOwnProperty(key));
          const itemPrice = menuItem[key];
          const itemTotal = item[key] * itemPrice;
          totalSum += itemTotal;

          alertMessage += `${key}: ${
          item[key]}, Total Cost = $${itemTotal.toFixed(2)}\n`;
        }
      }
    });

    // Append total sum to the alert message
    alertMessage += `Total Order Sum: $${totalSum.toFixed(2)}`;

    // Display the alert
    alert(alertMessage);

    // Reset cart quantities to 0 after displaying the alert
    cart.items.forEach(item => {
      for (let key in item) {
        item[key] = 0;
      }
    });

    // Clear the cart on the screen
    document.getElementById("items-in-cart").innerHTML = "";
  });
};
