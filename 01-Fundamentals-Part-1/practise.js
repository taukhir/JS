
/**
 **** variables : a box to store values
 * conventions : always use camelCase for variables
 * example : var, lowerCase
 * allowed : $ & _ can be used for variables
 * don't : 3yrs, james@vince, js keywords cannot be used 
 * constants : use upper case, ex : PI
 * Objects :  
 */
// let $js = "js course"
// console.log($js);


/** 
**** Different data types - 7 types
* 1. number (integers & decimals), let = 23
* 2. string (sequence of texts), let name = 'myName'
* 3. boolean (true or false)
* 4. undefined (variable which is not defined)
* 5. null (empty variable)
* 6. Symbol (Val that is unique and cannot be changed)
* 7. BigInt (representing large numbers)
* 
* JS has dynamic typing, data types are determined automatically.
*/
// console.log(typeof null); //returns null, which is an error in js and not corrected due to legacy reasons

/** 
 * **** var, let, const
 * const = cannot be mutated, cannot be reinitialized, cannot be declared empty
 * let = block scope
 * var = global scope
 * 
 * we should not create var's without declaring
 * myName = 'tauqeer'
 * here js created a property in global object
*/


/**
 * operators
 * MDN operators precedence
 */
// const now = 2037;
// const ageJosh = now - 1991, ageSarah = now - 1999;
// console.log(now - 1991 > now - 2018); //returns true

// let x, y;
// x = y = 25 - 10;
// console.log(x, y);

/**
 * ****type conversion
 * explicit converting data types
 * 
 * ****type coercion
 * implicit conversion of data types by js
 * 
 */
// let inputYear = '1997';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 17);
// console.log(typeof NaN); //number
// console.log(String(23), 23);

// console.log(23 + '23'); //2323
// console.log(23 + 1 + '23'); //2423
// console.log(1 + '23' + 1 + 1);
// console.log(12 - 1 - '12'); //-1

// let n = '1' + 1;
// n = n - 1;
// console.log(n); //10

/**
 * ****booleans
 * 5 falsy values :  null, undefined, 0 , false, '', NaN
 * everything lese is truthy values
 */

/**
 * switch statements, ternary operator
 */




