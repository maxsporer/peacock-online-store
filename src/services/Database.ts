import { InventoryItems, Items } from "../types/items";
import { Order, Orders, OrderStatus } from "../types/orders";

export class Database {
  private inventory: InventoryItems;
  private orders: Orders;

  constructor (inventory: InventoryItems = {}, orders: Orders = {}) {
    this.inventory = inventory;
    this.orders = orders;
  }

  getItemQuantity(item: string): number {
    return this.inventory[item].quantity;
  }

  getItemPrice(item: string): number {
    return this.inventory[item].price;
  }

  generateNewOrderId() {
    let newId = Math.floor(Math.random() * 1000) + 1;
    while (this.orders.hasOwnProperty(newId)) {
      newId = Math.floor(Math.random() * 1000) + 1;
    }
    return newId;
  }

  createOrder(items: Items): number {
    const newId = this.generateNewOrderId();
    this.orders[newId] = {
      status: 'Created',
      items: items
    };
    console.log(`Created order ${newId}.`)
    return newId;
  }

  updateOrderStatus(orderId: number, status: OrderStatus): void {
    if (this.orders.hasOwnProperty(orderId)) {
      this.orders[orderId].status = status;
    } else {
      console.log(`Order ${orderId} does not exist.`);
    }
  }

  getOrder(orderId: number): Order | void {
    if (this.orders.hasOwnProperty(orderId)) {
      return this.orders[orderId];
    } else {
      console.log(`Order ${orderId} does not exist.`);
    }
  }
}
