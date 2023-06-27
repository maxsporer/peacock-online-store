import { ShoppingCart, Item } from './models/ShoppingCart';

const cart = new ShoppingCart();
const apple = new Item('Apple', 1);
const orange = new Item('Orange', 1.5);

cart.addItem(apple, 1);
cart.addItem(orange, 3);

console.log(cart.getItems());
console.log(cart.getTotalPrice());