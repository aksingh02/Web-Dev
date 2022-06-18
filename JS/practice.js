// Calculator
function cal(num1, num2, operator){
    return operator(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function pow(num1, num2){
    return Math.pow(num1, num2);
}
var myCal = cal(8, 3, pow);
// console.log(myCal);
alert(myCal);