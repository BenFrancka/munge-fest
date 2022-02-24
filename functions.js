/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
    return customers.map(customer => `Hello ${customer.first_name} ${customer.last_name}`);
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    return customers
        .filter(customer => customer.age > 60)
        .map(customer => `Hello ${customer.first_name} ${customer.last_name}`);
}


/* 
Output: 
4532
*/
// const sum = people.reduce((accumulator, currentPerson) => {
//     const numberSoFar = accumulator + currentPerson.age;

//     return numberSoFar;
// }, 0)
export function addAllAges(customers) {
    return customers.reduce((accumulator, currentCustomer) => {
        const ageSoFar = accumulator + currentCustomer.age;

        return ageSoFar;
    }, 0);
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    return customers.reduce(
        (accumlator, customer) => {
            const sum = accumlator + customer.cool_factor;
            const averageCoolFactor = sum / customers.length;
            return averageCoolFactor;
        }, 0
    );
}

/* 
Output: 
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/
// const countingHashMap = {};

// for (let animal of animals) {
//     // check to see if my hashMap already has a value with this key
//     if (countingHashMap[animal.type]) {
//         // if it does, increment
//         countingHashMap[animal.type]++
//     } else {
//         // if it does NOT initialize
//         countingHashMap[animal.type] = 1
//     }
// }
export function getTotalOfEachGender(customers) {
    const genderHashMap = {};
    for(let customer of customers) {
        if(genderHashMap[customer.gender]) {
            genderHashMap[customer.gender]++;
        } else genderHashMap[customer.gender] = 1;
    }
    return genderHashMap;
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    const fordCustomers = customers.filter(customer => customer.car_make === 'Ford');
    const fordOwnerGenderHash = {};
    for(let customer of fordCustomers) {
        if(fordOwnerGenderHash[customer.gender]) {
            fordOwnerGenderHash[customer.gender]++;
        } else {
            fordOwnerGenderHash[customer.gender] = 1;
        }
    }
    return fordOwnerGenderHash;
}


/* 
Output: 
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return customers.reduce(
        (accumlator, current) => {
            if(!accumlator[current.car_make]) {
                accumlator[current.car_make] = [];
            }
            accumlator[current.car_make].push(current.cool_factor);
            return accumlator;
        }, {});
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/
// export function getAverageCoolFactor(customers) {
//     return customers.reduce(
//         (accumlator, customer) => {
//             const sum = accumlator + customer.cool_factor;
//             const averageCoolFactor = sum / customers.length;
//             return averageCoolFactor;
//         }, 0
//     );
// }
export function getAverageCoolFactorOfEachCar(customers) {
    const coolFactorsByCar = customers.reduce((acumulator, customer) => {
        if(!acumulator[customer.car_make]) {
            acumulator[customer.car_make] = [];
        }
        acumulator[customer.car_make].push(customer.cool_factor);
        return acumulator;
    }, {});

    return Object.entries(coolFactorsByCar).reduce((acumulator, entry) => {
        const entryAvg = (entry[1].reduce((acumulator, curr) => acumulator + curr, 0) / entry[1].length).toFixed(1);
        return { ...acumulator, [entry[0]] : entryAvg };
    }, {});
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

