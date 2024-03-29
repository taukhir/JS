function calculate(operation, initial, values){
    let total = initial;
    for(let num of values)
        total = operation(total, num);
    return total;
}

let sum = (x,y) => x + y;
let multiply = (x,y) => x * y;


totalSum = calculate(sum,0,[1,2,3,4,]);
console.log(totalSum);