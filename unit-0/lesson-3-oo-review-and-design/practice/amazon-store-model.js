// One of many, many, many possible implementations.

// I'm extending the native error class to make my own custom error
class SetPropertyError extends Error {
  constructor(property, className) {
    const message = `Cannot set ${property} on ${className}`;

    super(message);
  }
}

class EmptyCartError extends Error {
  constructor() {
    const message = "You have an empty cart. You cannot checkout";
    super(message);
  }
}
class NoPaymentInfoError extends Error {
  constructor() {
    const message = "Please enter payment info";
    super(message);
  }
}

class Store {
  constructor(brand) {
    this.brand = brand;
    this.products = [];
  }
}

// Not going to bother to make a class here
// There's only one instance of this
const Amazon = {
  createStore() {
    return new Store();
  },
};

class PaymentInfo {
  constructor(number, csv, expDate, userId, preferedPmt) {
    this.number = number;
    this.csv = csv;
    this.expDate = expDate;
    this.userId = userId;
    this.preferedPmt = preferedPmt;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = parseFloat(price);
  }
}

class User {
  static numberOfUsers = 0;

  static getNewUserId() {
    this.numberOfUsers++;
    return this.numberOfUsers;
  }

  constructor(id, firstName, lastName, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.paymentInfoRecords = [];
    this.cart = {};
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(val) {
    throw new SetPropertyError("fullName", this.constructor.name);
  }

  addToCart(product, quantity = 1) {
    // TODO: check if item has been added to cart
    // if item exists, with our product id,
    const productKey = product.name;
    if (this.cart[productKey]) {
      const oldQuantity = this.cart[productKey].quantity;

      // update quantity,
      this.cart[productKey] = {
        ...product,
        quantity: oldQuantity + quantity,
      };
    } else {
      // else add item to object
      this.cart[productKey] = {
        ...product,
        quantity,
      };
    }
  }

  checkOut() {
    // check if cart is not empty
    if (this.cart.length === 0) {
      throw new EmptyCartError();
    }

    // TODO: check for payment info
    if (this.paymentInfoRecords.length === 0) {
      throw new NoPaymentInfoError();
    }

    // sum up the total of the prices
    const totalAmount = this.cart.reduce((cartTotal, product) => {
      // check for quantity
      return cartTotal + product.price * product.quantity;
    }, 0);

    // Display the total
    console.log(totalAmount);

    // clear out the cart
    this.cart = [];
  }
}

class Seller extends User {
  constructor(id, firstName, lastName, email, password) {
    super(id, firstName, lastName, email, password);

    this.stores = [];
  }

  createStore() {
    const store = Amazon.createStore();
  }
}

const user = new User(
  User.getNewUserId(),
  "Erwins",
  "Saget",
  "erwinssaget@gmail.com",
  "password"
);

user.addToCart(new Product("paperTowels", "14.55"), 1);
user.addToCart(new Product("steak", "26.99"), 1);
user.addToCart(new Product("potatoes", "9.99"), 1);

// user.checkOut();
console.log(user);

// people need to make purchase
// - add something to cart
// - checkout

// TODO: how to use modules
