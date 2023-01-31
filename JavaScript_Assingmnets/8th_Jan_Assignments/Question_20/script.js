// 20. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// - add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

// - remove 'Honey'
shoppingCart.pop();
console.log(shoppingCart);

// - modify Tea to 'Green Tea'  
shoppingCart.splice(2, 1, "Green Tea");
console.log(shoppingCart);

