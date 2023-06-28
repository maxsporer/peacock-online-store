import { Database }from '../services/Database';
import { Items } from '../types/items';
import { Order } from "../types/orders";

export class OrderManager {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  createOrder(items: Items): number {
    return this.db.createOrder(items);
  }

  processOrder(orderId: number): void {
    this.db.updateOrderStatus(orderId, 'Processing');
  }

  shipOrder(orderId: number): void {
    this.db.updateOrderStatus(orderId, 'Shipped');
  }

  cancelOrder(orderId: number): void {
    this.db.updateOrderStatus(orderId, 'Cancelled');
  }

  getOrder(orderId: number): Order | void {
    this.db.getOrder(orderId);
  }
}
