import { Items } from './items';

export type OrderStatus = 'Created' | 'Processing' | 'Shipped' | 'Cancelled';

export type Order = {
  status: OrderStatus,
  items: Items
}

export type Orders = { [key: number]: Order};
