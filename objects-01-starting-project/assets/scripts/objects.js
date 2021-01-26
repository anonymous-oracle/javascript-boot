let person = {
    name: 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet: () => { return 'Hi there' }
};

console.log(person.greet());
console.log(person);

// adding additional fields on the fly as follows
person.isAdmin = true;
console.log(person);
delete person.age;
console.log(person);
console.log('\n');

// to use a string as key, do the follows
person = {
    'first-name': 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet: () => { return 'Hi there' }
};
// now accessing 'first-name' in javascript syntax will be difficult, so we use another notation
// person.first name will be wrong; another syntax point is that, even for other attributes, the key should be specified as a string
// if the below notation is used
console.log(person['first-name']);
console.log(person['age']);

// can also have numbers as keys; such numbers must be 0 or higher
person = {
    'first-name': 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet: () => { return 'Hi there' },
    1.5: 'a number'
};
console.log('\n');

console.log(person[1.5]);
console.log(person['1.5']);

let keyNum = 1.5;
console.log(person[keyNum]);
console.log('\n');

let userChoiceField = 'level';
// by enclosing the variable userChoiceField inside the square brackets, we can use the value inside the variable as the
// name of the field
person = {
    'first-name': 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet: function () { return 'Hi there' },
    1.5: 'a number',
    [userChoiceField]: '...'
};
console.log('\n');
// using spread operator for objects
let person2 = { ...person };
console.log(person2);

// deep copying arrays within objects and overwriting values
// age: 29 will overwrite the age value obtained after the spread
// in the hobbies: field, the spread operator on the person.hobbies will be carried out which will put out the
// values in the new array which has a copy of the old array
let person3 = { ...person, age: 29, hobbies: [...person.hobbies] }

// another way to deep copy objects
let person4 = Object.assign({}, person);
console.log('\n');
console.log(person4);
person4 = Object.assign(person3, person);
console.log('\n');
console.log(person4);

// OBJECT DESTRUCTURING
// pull out the value of the object keyed by hobbies
let { hobbies } = person;
// similarly
let { age } = person;
console.log('\n');
console.log(hobbies);
console.log(age);

let { age: newAge, ...others } = person;
console.log('\n');
console.log(newAge);
console.log(others);


// USING THE this keyword
console.log('\n');
person = {
    'first-name': 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet: function () { return `Hi there, I'm ${this['first-name']}` },
    1.5: 'a number',
    [userChoiceField]: '...'
};
console.log(person.greet());

// OR
console.log('\n');
person = {
    'first-name': 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet() { return `Hi there, I'm ${this['first-name']}` },
    1.5: 'a number',
    [userChoiceField]: '...'
};
console.log(person.greet());

// USING CALL FUNCTION OUTSIDE THE OBJECT
console.log('\n');
person = {
    'first-name': 'Anonymous',
    age: 24,
    hobbies: ['coding', 'fitness'],
    greet() { return `Hi there, I'm ${this['first-name']}` },
    1.5: 'a number',
    [userChoiceField]: '...',

};
let { greet } = person;
// here we pass the person object so that the .call() function can use the object to execute the greet function
console.log(greet.call(person));

// NOTE: THE this KEYWORD CHANGES THE OBJECT IT REFERS TO WHEN A FUNCTION IS CALLED SOMEWHERE; HOWEVER IF THE FUNCTION IS AN ARROW FUNCTION, THE this KEYWORD
// WILL REFER TO THE GLOBAL this OBJECT
// IF THERE IS A METHOD CALL, THEN THE ARROW FUNCTION SYNTAX WILL BIND this TO THE PARENT OBJECT OF THE FOREACH METHOD; BUT
// IF INSTEAD OF THE ARROW FUNCTION, NORMAL FUNCTION IS CALLED, THEN IT WILL REFER TO THE GLOBAL this OBJECT; SO ARROW FUNCTIONS WILL NOT HAVE ANY REFERENCES TO THE OUTSIDE

// GETTERS AND SETTERS
person = {
    set name(val) {
        // ._name won't be available for external access
        if (val.trim() === '') {
            this._name= 'DEFAULT';
        }
        this._name= val;
    },
    get name(){
        return this._name;
    },
};

// this below line will set the name field in person to the given value
person.name = 'anonymous';
console.log('\n');
console.log(person.name.toUpperCase());