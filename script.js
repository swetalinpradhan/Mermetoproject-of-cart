
const cartTable = document.getElementById("cartTable");


const formatPrice = (amount) => `Rs ${amount.toLocaleString()} .00`;


const populateCart = (cart) => {
  cart.items.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img class="timg" src="${item.image}" alt="${item.title}" /></td>
      <td>${item.title}</td>
      <td>${formatPrice(item.presentment_price)}</td>
      <td><button>${item.quantity}</button></td>
      <td>${formatPrice(item.line_price)}</td>
      <td><button class="deletebtn"><img class="dimg" src="deleteicon.png" alt="Delete" /></button></td>
    `;

    cartTable.appendChild(row);
  });
};


const fetchCartData = async () => {
  const API_ENDPOINT_URL = "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"; 
  try {
    const response = await fetch(API_ENDPOINT_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); 
    populateCart(data); 
  } catch (error) {
    console.error("Error fetching cart data:", error);
  }
};

fetchCartData();

