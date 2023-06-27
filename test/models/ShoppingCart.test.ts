import { ShoppingCart, Item } from '../../src/models/ShoppingCart';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;
  let itemA: Item;
  let itemB: Item;

  beforeEach(() => {
    cart = new ShoppingCart();
    itemA = new Item('Test Item A', 5);
    itemB = new Item('Test Item B', 10);

    cart.addItem(itemA, 2);
    cart.addItem(itemB, 3)
  });

  test('should add items to the cart', () => {
    expect(cart.getItems()).toEqual([
      [ { name: 'Test Item A', price: 5 }, 2 ],
      [ { name: 'Test Item B', price: 10 }, 3 ]
    ]);
  });

  test('should calculate the correct total price', () => {
    expect(cart.getTotalPrice()).toBe(40);
  });

  test('should empty the cart', () => {
    cart.emptyCart();
    expect(cart.getItems()).toEqual([]);
  })
});
