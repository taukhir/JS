function testRest(...args){
    console.log(...args);
}

testRest(1,2,3);

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");

  function fun1(...theArgs) {
    console.log(theArgs.length);
  }
  
  fun1(); // 0
  fun1(5); // 1
  fun1(5, 6, 7); // 3