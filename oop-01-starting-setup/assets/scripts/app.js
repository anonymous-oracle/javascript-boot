// class Product {
//     title = 'DEFAULT';
//     description;
//     price;
//     static numProducts = 0;
//     static incrementNumProducts() {
//         this.numProducts++;
//     }

//     static getNumProducts() {
//         return this.numProducts;
//     }

//     constructor(title, description, price) {
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         Product.incrementNumProducts();
//     }
//     // set price(val) {this._price = val;}
//     // get price() { return this.price; }
// }

// let product = new Product('product 1', 'this is a product', 8.99);
// // console.log(product);


// class ProductList {
//     products = [];
//     totalValue = 0;
//     constructor(...multipleProducts) {
//         this.products = Array.from(multipleProducts);
//         this.products.forEach(product => { this.totalValue += product.getPrice() })
//     };
//     set products(value){
//         this.products = value;
//     }
//     render() {
//         this.products.forEach((prod) => { console.log(prod) })
//     };

//     addProduct(product) {
//         const updatedList = [...this.products];
//         updatedList.push(product);
//         this.products = updatedList;
//         this.totalValue += product.getPrice();
//     }

//     addProducts(...multipleProducts) {
//         this.products.push(...multipleProducts);
//         multipleProducts.forEach(product => { this.totalValue += product.getPrice() })

//     }
//     get totalListValue() { return this.totalValue; }
// }

// let productList = new ProductList();
// productList.render();
// // static methods are exclusive the class object and not the class instance; also static fields can only be accessed within static methods
// productList.addProducts(product, new Product('product 2', 'this is product 2', 5.99),
//     new Product('product 3', 'this is product 3', 35.99), new Product('product 4', 'this is product 4', 45.99), new Product('product 5', 'this is product 5', 52.99));

// console.log(`The number of Products is: ${Product.getNumProducts()}`);
// productList.render();
// console.log(`The total list value is ${productList.totalListValue()}`);

/////////////////////////////////////////////////////////////////////////////
// INHERITANCE

class Device {
    constructor(name, type, description) {
        this._name = name;
        this._type = type;
        this._description = description;
    }

    get deviceName() {
        return this._name;
    }

    get deviceType() {
        return this._type;
    }

    get deviceDescription() {
        return this._description;
    }

    set deviceName(name) {
        this._name = name;
    }

    set deviceType(type) {
        this._type = type;
    }

    set deviceDescription(description) {
        this._description = description;
    }

    turnOnDevice() {
        console.log(`${this.deviceName} turned on`);
    }
    turnOffDevice() {
        console.log(`${this.deviceName} turned off`);
    }
}

class Phone extends Device {
    constructor(name) {
        super(name, 'CELL PHONE', 'this is a cellular smartphone');
    }
    chargePhone() {
        console.log(`${this._name} is charging`);
    }
    callNumber(number) {
        console.log(`calling ${number}`);
    }
}

let phone = new Phone('my phone')
phone.chargePhone();
phone.callNumber(2654);
console.log(phone.deviceName);
console.log(phone.deviceDescription);
console.log(phone.deviceDescription);
console.log(phone.turnOffDevice());
console.log(phone.turnOnDevice());
