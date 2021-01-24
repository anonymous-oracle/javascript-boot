let person = {
    name:'Anonymous',
    age:24,
    hobbies:['coding','fitness'],
    greet: ()=>{return 'Hi there'}
};

console.log(person.greet());
console.log(person);

// adding additional fields on the fly as follows
person.isAdmin = true;
console.log(person);
delete person.age;
console.log(person);

// to use a string as key, do the follows
person = {
    'first-name':'Anonymous',
    age:24,
    hobbies:['coding','fitness'],
    greet: ()=>{return 'Hi there'}
};
// now accessing 'first-name' in javascript syntax will be difficult, so we use another notation
// person.first name will be wrong; another syntax point is that, even for other attributes, the key should be specified as a string
// if the below notation is used
console.log(person['first-name']);
console.log(person['age']);

// can also have numbers as keys; such numbers must be 0 or higher
person = {
    'first-name':'Anonymous',
    age:24,
    hobbies:['coding','fitness'],
    greet: ()=>{return 'Hi there'},
    1.5: 'a number'
};

console.log(person[1.5]);
console.log(person['1.5']);

let keyNum=1.5;
console.log(person[keyNum]);

let userChoiceField = 'level';
// by enclosing the variable userChoiceField inside the square brackets, we can use the value inside the variable as the
// name of the field
person = {
    'first-name':'Anonymous',
    age:24,
    hobbies:['coding','fitness'],
    greet: ()=>{return 'Hi there'},
    1.5: 'a number',
    [userChoiceField]: '...'
};