"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShoppingCart_1 = require("./classes/ShoppingCart");
const cart = new ShoppingCart_1.ShoppingCart();
const apple = new ShoppingCart_1.Item('Apple', 1);
const orange = new ShoppingCart_1.Item('Orange', 1.5);
cart.addItem(apple, 1);
cart.addItem(orange, 3);
console.log(cart.getItems());
