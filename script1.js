/**
 * Write a Javascript program that prompts the user for the minimum random integer and
 * prompts for the maximum random integer. Generate a random number and write it to console.
 */

function ran(){
    let minRand = parseInt(prompt("Enter the minimum random integer:"));
    let maxRand = parseInt(prompt("Enter the maximum random integer:"));
    let intNum = Math.random()*(maxRand-minRand+1)+minRand;
    console.log(Math.floor(intNum));
}

ran();