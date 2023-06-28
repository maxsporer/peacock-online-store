import { ShoppingCart, Item } from './models/ShoppingCart';
import { IoCContainer } from 'mspo-ioc-container/lib';

const container = new IoCContainer();

const cart = new ShoppingCart();
container.bind('cart', cart);

const apple = new Item('Apple', 1);
const orange = new Item('Orange', 1.5);

cart.addItem(apple, 1);
cart.addItem(orange, 3);

console.log(cart);
console.log(container.resolve('cart'));
