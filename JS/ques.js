// Love Calculator
var p1 = prompt("Enetr your name: ");
var p2 = prompt("Enetr your partner name: ");
var cal = Math.random() * 100;
cal = Math.floor(cal) + 1;
alert("Love score of " + p1 + " and " + p2 + " is " + (cal) + "%");





// bmi calculator
var weight = prompt("Enter your weight(in kgs):");
var height = prompt("Enter your height(in m):");
var bmi = weight / (height * height);
if(bmi < 18.5){
alert("Your bmi is " + bmi + " which is UNDER-WEIGHT");
}
if(bmi > 18.5 && bmi <= 24.9){
alert("Your bmi is " + bmi + " which is NORMAL");
}
if(bmi > 25 && bmi <= 29.9){
alert("Your bmi is " + bmi + " which is OVER-WEIGHT");
}
if(bmi > 30 && bmi <= 34.9){
alert("Your bmi is " + bmi + " which is OBESE");
}
else{
alert("Your bmi is " + bmi + " which is EXREMELY-OBESE");
}






// Leap Year
var year = prompt("Enter the year:");
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400){
           alert(year + " is a leap year."); 
        }
        else{
            alert(year + " is not a leap year.");
        }
    }
    else{
        alert(year + " is a leap year.");
    }
}
else{
    alert(year + " is not a leap year.");
}





// FizzBuzz
var result = [];
var count = 1;

function fizzBuzz() {
        
    if(count % 15 == 0){
        result.push("FizzBuzz");
    }
    else if(count % 5 == 0){
       result.push("Buzz");
    }
    else if(count % 3 == 0){
       result.push("Fizz");
    }
    else{
        result.push(count);
    }
        count++;
    console.log(result);
}