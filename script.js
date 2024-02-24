window.onload = event => {
  // Associative Array
  const menu1 = [];
  menu1["hotdogs"] = 4;
  menu1["fries"] = 3.5;
  menu1["soda"] = 1.5;
  menu1["sauerkraut"] = 1; 

  // JSON
  let menu2 = {
    "foodMenu": [
      {"hotdogs": 4}, {"fries": 3.5}, {"soda": 1.5}, {"sauerkraut": 1}
    ]
  };

  // Function Object/Class
  function MenuItem(name, price) {
    this.name = name;
    this.price = price;
  }

  const hotdogs = new MenuItem("hotdogs", 4);
  const fries = new MenuItem("fries", 3.5);
  const soda = new MenuItem("soda", 1.5);
  const sauerkraut = new MenuItem("sauerkraut", 1);

  const menu = [hotdogs, fries, soda, sauerkraut];
 
  // Show menu with JSON
  document.getElementById("menu-1").innerHTML = '<ul id="menu-list"></ul>';

  menu2.foodMenu.forEach(item => {
    const menuItem = Object.keys(item)[0];
    const menuPrice = item[menuItem];
    document.getElementById("menu-list").innerHTML += `<li>${menuItem}: $${menuPrice}</li>`;
  });

  // Show menu with Function Object/Class
  document.getElementById("menu-2").innerHTML = '<ul id="menu-list-2"></ul>';

  menu.forEach(item => {
    const menuItem = item.name;
    const menuPrice = item.price;
    document.getElementById("menu-list-2").innerHTML += `<li>${menuItem}: $${menuPrice}</li>`;
  });
};
