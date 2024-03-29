function namedFunction() {
    console.log("named functions");
}

var functionExpression = function(){
    console.log("function expression");
}

var flatFunctionExpression = () => console.log("flat function expression");

namedFunction();
functionExpression();
flatFunctionExpression()