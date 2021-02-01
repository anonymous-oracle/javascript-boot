// ALTERNATE WAY TO CREATE A CLASSES OR WE CAN SAY, HOW CLASSES WORK BEHIND THE SCENES
function Person() {
    this.age=30;
    this.name='Suhas';
    this.greet = function() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
    }   
}

// THE new KEYWORD RETURNS THE OBJECT WHEN CREATED, WITHOUT IT, A null VALUE WOULD BE RETURNED
let p = new Person();
p.greet();
// CALLING THE  .toString() METHOD WILL NOT THROW AN ERROR AS THERE IS SOME BASE CLASS WHICH HAS THE .toString METHOD
// console.log(p.toString());  
console.log(p.__proto__);
console.dir(Person);