/**
 * Write a simple JavaScript Program that is a calculator:
 * 1- ask the user if they want +, -, /, *
 * 2- ask for 2 numbers
 * 3- use a switch operation and console.log
 */

function oper(){
    let operation = prompt("Which operation to perform?");
    let num1 = parseFloat(prompt("What is the first number?"));
    let num2 = parseFloat(prompt("What is the second number?"));
    let result;
    switch(operation){
        case "+":
            result = num1+num2
            break;
        case "-":
            result = num1-num2
            break;
        case "/":
            result = num1/num2
            break;
        case "*":
            result = num1*num2
            break;
        default:
            console.log("No valid input, try again");
    }
    console.log(result);
}

oper();