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
}

export class Item {
  constructor(public name: string, public price: number) {}
}
