let a, b, rest;
[a, b] = [110, 20];

console.log(a, b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

const obj = { name: "ahmed", age: 22 };
const { name: empName = "tauqeer", age: empAge } = obj;
console.log(empName, empAge);