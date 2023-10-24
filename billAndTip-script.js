/**Define an array billTotals that contains 
 * The following numeric values:
 * 50, 150, 20, 23, 30, 500, 123
 * Define a new empty array called tips
 * Looop through billTotals and determine the tip
 * total >= 75 tip 15%
 * 30 <= total < 75 tip 20%
 * total < 30 tip 30%
 * Populate the array tips with tip value
 * Write to the console the bill's total amount (tip and total)
 */

let billTotals = [50, 150, 20, 23, 30, 500, 123];
let tips = new Array();
for(let bill of billTotals){
    let tip;
    if(bill >= 75){
        tip = 0.15*bill;
    }else if(bill >= 30){
        tip = 0.2*bill;
    }else{
        tip = 0.3*bill;
    }
    tips.push(tip);
    console.log("tip= " + tip.toFixed(2) + " total= " + (bill + tip).toFixed(2));
}