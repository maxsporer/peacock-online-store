import { Database } from '../services/Database';
import { OrderManager } from '../services/OrderManager';
import { Items } from '../types/items';

export class ShoppingCart {
  private items: Items;
  private db: Database;
  private om: OrderManager;

  constructor(items: Items, db: Database, om: OrderManager) {
    this.items = items;
    this.db = db;
    this.om = om;
  }

  addItem(item: string, quantity: number): void {
    if (this.db.getItemQuantity(item) >= quantity) {
      this.items[item] = quantity;
    } else {
      console.log(`Not enough ${item}s stock.`);
    }
  }

  getItems(): any {
    return this.items;
  }

  getTotalPrice(): number {
    let total = 0;
    for (const item in this.items) {
      total += this.db.getItemPrice(item);
    }
    return total;
  }

  emptyCart(): void {
    this.items = {};
  }

  checkout(): number {
    const orderId = this.om.createOrder(this.items);
    this.emptyCart();
    return orderId;
  }
}
