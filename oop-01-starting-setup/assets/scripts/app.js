class Product {
    title = 'DEFAULT';
    description;
    price;
    static init(){
        console.log(`product class object ${this.title} initialized`);
    }

    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
        
    }
}

let product = new Product('product 1', 'this is a product', 8.99);
// console.log(product);


class ProductList {
    products = [product, new Product('product 2', 'this is a product', 7.99)];

    constructor() { };

    render() {
        this.products.forEach((prod) => { console.log(prod) })
    };
}

let productList = new ProductList();
productList.render();
console.log()