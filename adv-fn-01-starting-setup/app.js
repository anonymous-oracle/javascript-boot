// // PURE FUNCTION
// function add(a, b) {
//     return a + b;
// };

// console.log(add(1, 5));

// // IMPURE FUNCTION
// function addRandom(num) {
//     return num + Math.random();
// }
// console.log(addRandom(5));

// // ANY FUNCTION WHICH CHANGES A VARIABLE OUTSIDE OF THE FUNCTION IS ALSO AN IMPURE FUNCTION

// /////////////////////////////////////////////////////////////////////

// // FACTORY FUNCTIONS: FUNCTIONS WHICH PRODUCE OTHER FUNCTIONS

// function createTaxCalculator(taxPercentage) {
//     function calculateTax(amount) {
//         return amount * taxPercentage;
//     }
//     return calculateTax;
// }

// const calculateVatAmount = createTaxCalculator(0.19);
// const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// console.log(calculateVatAmount(100));
// console.log(calculateIncomeTaxAmount(100));

/////////////////////////////////////////////////////////////////////
// // CLOSURES
// let userName = 'Max';
// function greetUser() {
//     console.log(`Hi ${userName}`);
// }

// userName = 'Manuel';
// greetUser();
/////////////////////////////////////////////////////////////////////
// RECURSION

function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);

    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 10));

const myself = {
    name_: 'Max',
    friends: [
        {
            name_: 'Manuel',
            friends: [
                {
                    name_: 'Chris',
                    friends: [
                        {
                            name_: 'Hari'
                        },
                        {
                            name_: 'Amilia'
                        }
                    ]
                }
            ]
        },
        {
            name_: 'Julia'
        }
    ]
};

function getFriendNames(person) {
    const collectedNames = [];
    if (!person.friends) {
        return [];
    }
    for (const friend of person.friends) {
        collectedNames.push(friend.name_)
        collectedNames.push(...getFriendNames(friend));
    }
    return collectedNames;
}

console.log(getFriendNames(myself));