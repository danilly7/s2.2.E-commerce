// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array

console.log("array products:", products);

const buscarProducts = (valor) => products.findIndex(products => products.id === valor);
const buscarCart = (valor) => cart.findIndex(cart => cart.id === valor);

function buy(id) {
    let positionProducts = buscarProducts(id);
    let positionCart = buscarCart(id);
    let newItem = 0;

    if (positionProducts < 0) {
        alert("Error: this product is not in our list of products.")
    } else {
        if (positionCart < 0) {
            newItem = products[positionProducts];
            newItem.quantity = 1;
            console.log("new item que se añadirá al cart:", newItem);

            cart.push(newItem);
        } else {
            cart[positionCart].quantity += 1;
            console.log("item id que sumará quantity:", cart[positionCart].id);
        }
    }
}

console.log("Updated cart:", cart);
console.table(cart);

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);
}

console.log("Antes del clean:", cart);
cleanCart();
console.log("Después del clean:", cart);

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array, bucle.

    let total = 0;
    let quantityItem = 0;
    let priceItem = 0

    for (let i = 0; i < cart.length; i++) {
        quantityItem = cart[i].quantity;
        priceItem = cart[i].price;
        total += (quantityItem * priceItem);
        console.log("Total:", total); 
    }
}

calculateTotal();

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}