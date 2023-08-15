/**
 * Spread Operator
 */

let fruits = ["apple", "orange", "banana", "jack", "pineapple"];
let vegetables = ["carrot", "radish"];

//spread operator in array literals
let basket = [...fruits, ...vegetables];

console.log(...basket);


function sum(x, y, z) {
    return x + y + z;
}

//spread operator while passing arguments to functions
let numbers = [1,2,3];
console.log(sum(...numbers));

//spread operator in object
let obj1 = {...numbers};
console.log(obj1);

//merging two objects using spread literals
let obj2  = {...fruits}
console.log({...obj1,obj2});