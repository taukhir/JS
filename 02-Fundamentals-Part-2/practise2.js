'use strict';
/**
 * Function
 * Code reusability
 * Code modularisation
 */
class Fruits {
    name;
    quant;

    constructor(name, quant) {
        this.name = name;
        this.quant = quant;
    }
}

function log(input) {
    console.log(input.toString());
}

function juiceMachine(fruits) {
    console.log(`Juice made with ${fruits.name} and quantity ${fruits.quant}`);
}

juiceMachine(new Fruits("apples,mangoes", "3,2"));

/**
 * Different types of functions
 * 1. Declarative functions
 * 2. Expression/Anonymous functions
 */

function declarativeFunctions() {
    console.log('I am declarative functions');
}

const anonymousFunctions = function () { console.log('I am anonymous function'); };

declarativeFunctions();
anonymousFunctions();