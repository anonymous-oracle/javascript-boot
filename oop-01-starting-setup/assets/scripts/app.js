class Product {
    title = 'DEFAULT';
    description;
    price;
    static numProducts = 0;
    static incrementNumProducts() {
        this.numProducts++;
    }

    static getNumProducts() {
        return this.numProducts;
    }

    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
        Product.incrementNumProducts();
    }
    // set price(val) {this._price = val;}
    get price() { return this._price; }
}

let product = new Product('product 1', 'this is a product', 8.99);
// console.log(product);


class ProductList {
    products = [];
    totalValue = 0;
    constructor(...multipleProducts) {
        this.products = Array.from(multipleProducts);
        this.products.forEach(product => { this.totalValue += product.getPrice() })
    };

    render() {
        this.products.forEach((prod) => { console.log(prod) })
    };

    addProduct(product) {
        this.products.push(product);
        this.totalValue += product.getPrice();
    }

    addProducts(...multipleProducts) {
        this.products.push(...multipleProducts);
        multipleProducts.forEach(product => { this.totalValue += product.getPrice() })

    }
    get totalListValue() { return this.totalValue; }
}

let productList = new ProductList();
productList.render();
// static methods are exclusive the class object and not the class instance; also static fields can only be accessed within static methods
productList.addProducts(product, new Product('product 2', 'this is product 2', 5.99),
    new Product('product 3', 'this is product 3', 35.99), new Product('product 4', 'this is product 4', 45.99), new Product('product 5', 'this is product 5', 52.99));

console.log(`The number of Products is: ${Product.getNumProducts()}`);
productList.render();
console.log(`The total list value is ${productList.totalListValue()}`);