import { IoCContainer } from 'mspo-ioc-container/lib';
import { Database } from './services/Database';
import { OrderManager } from './services/OrderManager';
import { ShoppingCart } from './models/ShoppingCart';
import { InventoryItems } from "./types/items";

const container = new IoCContainer();

const inventory: InventoryItems = {
  laptop: {
    price: 1000,
    quantity: 5
  },
  smartphone: {
    price: 800,
    quantity: 8
  },
  headphones: {
    price: 100,
    quantity: 20
  },
  keyboard: {
    price: 50,
    quantity: 12
  },
  mouse: {
    price: 30,
    quantity: 15
  },
  monitor: {
    price: 300,
    quantity: 3
  },
};

container.bind('db', new Database(inventory, {}));
const db = container.resolve<Database>('db');

container.bind('om', db);
const om = container.resolve<OrderManager>('om');

console.log(om);

container.bind('cart', new ShoppingCart({}, db, om));
const cart = container.resolve<ShoppingCart>('cart');

cart.addItem('headphones', 1);
cart.addItem('monitor', 2);
cart.addItem('mouse', 1);
cart.addItem('keyboard', 1);
cart.addItem('laptop', 1);
cart.addItem('smartphone', 30);

console.log(`current cart: ${cart.getItems()}`);
console.log(`current price: ${cart.getTotalPrice()}`)

const orderId = cart.checkout();
console.log(`order id: ${orderId}`);
console.log(`cart after checkout: ${cart.getItems()}`);

console.log(db);
console.log(om);
