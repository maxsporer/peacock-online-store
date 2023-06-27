export class ShoppingCart {
  private items: [Item, number][];

  constructor() {
    this.items = [];
  }

  addItem(item: Item, quantity: number) {
    this.items.push([item, quantity]);
  }

  getItems(): any {
    return this.items;
  }

  getTotalPrice(): number {
    let total = 0;
    this.items.forEach(([item, quantity]) => {
      total += item.price * quantity;
    });
    return total;
  }
}

export class Item {
  constructor(public name: string, public price: number) {}
}
