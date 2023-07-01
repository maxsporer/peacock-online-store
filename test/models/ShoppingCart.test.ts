import { ShoppingCart } from '../../src/models/ShoppingCart';
import { IoCContainer } from 'mspo-ioc-container/lib';

describe('ShoppingCart', () => {
  let sp: ShoppingCart;
  let dbMock: any;
  let omMock: any;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    const container = new IoCContainer();
    dbMock = {
      getItemQuantity: jest.fn(),
      getItemPrice: jest.fn()
    };
    omMock = {
      createOrder: jest.fn()
    }
    container.bind('db', dbMock);
    container.bind('om', omMock);

    const items = {};
    sp = new ShoppingCart(items, container.resolve('db'), container.resolve('om'));

    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('addItem should add item to cart when enough quantity is available', () => {
    dbMock.getItemQuantity.mockReturnValue(10);
    sp.addItem('testItem', 5);
    expect(sp.getItems()).toEqual({ testItem: 5 });
  });

  test('addItem should not add item to cart when not enough quantity is available', () => {
    dbMock.getItemQuantity.mockReturnValue(10);
    sp.addItem('testItem', 15);
    expect(sp.getItems()).toEqual({});
    expect(consoleSpy).toHaveBeenCalledWith('Not enough testItems stock.');
  });

  test('getTotalPrice should calculate the correct total price', () => {
    dbMock.getItemQuantity.mockReturnValue(10);
    dbMock.getItemPrice.mockReturnValue(10);
    sp.addItem('testItemA', 1);
    sp.addItem('testItemB', 1);
    expect(sp.getTotalPrice()).toEqual(20);
  });

  test('emptyCart should remove all items from cart', () => {
    dbMock.getItemQuantity.mockReturnValue(10);
    sp.addItem('testItemA', 1);
    sp.addItem('testItemB', 1);
    sp.emptyCart();
    expect(sp.getItems()).toEqual({});
  });

  test('checkout should create an order and empty the cart', () => {
    dbMock.getItemQuantity.mockReturnValue(10);
    const orderId = 0;
    omMock.createOrder.mockReturnValueOnce(orderId);
    sp.addItem('testItem', 1);
    const result = sp.checkout();
    expect(result).toEqual(orderId);
    expect(omMock.createOrder).toHaveBeenCalledWith({ testItem: 1});
    expect(sp.getItems()).toEqual({});
  });
});
