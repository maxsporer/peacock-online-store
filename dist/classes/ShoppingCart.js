"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item, quantity) {
        this.items.push([item, quantity]);
    }
    getItems() {
        return this.items;
    }
}
exports.ShoppingCart = ShoppingCart;
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Item = Item;
