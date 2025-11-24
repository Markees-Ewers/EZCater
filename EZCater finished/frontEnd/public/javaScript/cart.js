
let cart = [];


function addToCart(item, price) {
    const cartItem = { item: item, price: parseFloat(price) };
    cart.push(cartItem);
    alert(`${item} added to cart!`);
    console.log(cart); 
}
