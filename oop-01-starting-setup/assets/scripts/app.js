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
// // INHERITANCE

// class Device {
//     constructor(name, type, description) {
//         this._name = name;
//         this._type = type;
//         this._description = description;
//     }

//     get deviceName() {
//         return this._name;
//     }

//     get deviceType() {
//         return this._type;
//     }

//     get deviceDescription() {
//         return this._description;
//     }

//     set deviceName(name) {
//         this._name = name;
//     }

//     set deviceType(type) {
//         this._type = type;
//     }

//     set deviceDescription(description) {
//         this._description = description;
//     }

//     turnOnDevice() {
//         console.log(`${this.deviceName} turned on`);
//     }
//     turnOffDevice() {
//         console.log(`${this.deviceName} turned off`);
//     }
// }

// class Phone extends Device {
//     constructor(name) {
//         super(name, 'CELL PHONE', 'this is a cellular smartphone');
//     }
//     chargePhone() {
//         console.log(`${this._name} is charging`);
//     }
//     callNumber(number) {
//         console.log(`calling ${number}`);
//     }
// }

// let phone = new Phone('my phone')
// phone.chargePhone();
// phone.callNumber(2654);
// console.log(phone.deviceName);
// console.log(phone.deviceDescription);
// console.log(phone.deviceDescription);
// console.log(phone.turnOffDevice());
// console.log(phone.turnOnDevice());

///////////////////////////////////////////////////////////////////////////
// // PRIVATE PROPERTIES

// class Device {
//     constructor(name, type, description) {
//         this._name = name;
//         this._type = type;
//         this._description = description;
//     }

//     get deviceName() {
//         return this._name;
//     }

//     get deviceType() {
//         return this._type;
//     }

//     get deviceDescription() {
//         return this._description;
//     }

//     set deviceName(name) {
//         this._name = name;
//     }

//     set deviceType(type) {
//         this._type = type;
//     }

//     set deviceDescription(description) {
//         this._description = description;
//     }

//     turnOnDevice() {
//         console.log(`${this.deviceName} turned on`);
//     }
//     turnOffDevice() {
//         console.log(`${this.deviceName} turned off`);
//     }
// }

// class Laptop extends Device {
//     // PRIVATE FIELD SYNTAX BELOW; NOT SUPPORTED ON MOZILLA AS OF 31/01/2021
//     #password=null;
//     constructor(name) {
//         super(name, 'LAPTOP', 'this is a laptop');
//     }
//     chargeLaptop() {
//         console.log(`${this._name} is charging`);
//     }
//     runApplication(appName) {
//         console.log(`running ${appName}`);
//     }
//     set password(input) {
//         if (this.#password !== null) {
//             this.#password = input;
//         }
//         else{
//             console.log('Enter old password to set new password');
//             const oldPassword = prompt('Enter your old password: ');
//             if (this.passwordMatch(oldPassword)){
//                 this.#password=input;
//                 console.log('Password reset successfully');
//             }
//             else{
//                 console.log('Incorrect Password');
//             }
//         }
//     }
//     passwordMatch(enteredPassword) {
//         return this.#password === enteredPassword ? 1 : 0;
//     }
// }

// let laptop = new Laptop('my laptop');
// laptop.password = 'password';
// laptop.runApplication('vscode');
// laptop.password = 'new password';

//////////////////////////////////////////////////////////////////////////////////////

// class Device {
//     constructor(name, type, description) {
//         this._name = name;
//         this._type = type;
//         this._description = description;
//     }

//     get deviceName() {
//         return this._name;
//     }

//     get deviceType() {
//         return this._type;
//     }

//     get deviceDescription() {
//         return this._description;
//     }

//     set deviceName(name) {
//         this._name = name;
//     }

//     set deviceType(type) {
//         this._type = type;
//     }

//     set deviceDescription(description) {
//         this._description = description;
//     }

//     turnOnDevice() {
//         console.log(`${this.deviceName} turned on`);
//     }
//     turnOffDevice() {
//         console.log(`${this.deviceName} turned off`);
//     }
// }

// const d = new Device('device', 'electronic', 'can augment tasks of a person');
// console.log(typeof d);
// console.log(d instanceof Device);

///////////////////////////////////////////////////////////////////////////////////////
// OBJECT DESCRIPTORS

let person = {name: 'Anonymous', greet(){console.log(this.name)}};
person.greet();

let descriptors = Object.getOwnPropertyDescriptor(person);
let descriptor = Object.getOwnPropertyDescriptor(person, 'greet');
console.log();
console.log(descriptor);

// changing the properties of the object; for the above object we change the writeable property to false
// this will make writing to the .name property in the person object impossible

Object.defineProperty(person, 'name', {configurable:true, value:person.name, writable:false})
person.name = 'Anonymous 2';
person.greet();

delete person.name;
console.log(`when configurable=true: ${person}`);
Object.defineProperty(person, 'name', {configurable:true, value:person.name, writable:false, enumerable:true})
console.log(`when configurable=false: ${person}`);


// setting enumerable=false
person = {name: 'Anonymous', greet(){console.log(this.name)}};
Object.defineProperty(person, 'name', {configurable:true, value:person.name, writable:false, enumerable:true})
Object.defineProperty(person, 'greet', {configurable:true, value:person.greet, writable:true, enumerable:false})
console.log(person);
console.log('\n');
console.log('looping through the person object when enumerable=true...');
for (const key in person){console.log(person[key])};
person = {name: 'Anonymous', greet(){console.log(this.name)}};
Object.defineProperty(person, 'name', {configurable:true, value:person.name, writable:true, enumerable:false})
Object.defineProperty(person, 'greet', {configurable:true, value:person.greet, writable:true, enumerable:false})

console.log('looping through the person object when enumerable=false...');
for (const key in person){console.log(person[key])};
person = {name: 'Anonymous', greet(){console.log(this.name)}};
console.log('\n');
console.log(person);
console.log('\n');
