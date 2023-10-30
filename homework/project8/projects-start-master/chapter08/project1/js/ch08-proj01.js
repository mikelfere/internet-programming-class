
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

for(let element of cart){
   let total = calculateTotal(element.quantity, element.product.price);
   outputCartRow(element, total);
}

document.write("<tr class=\"totals\"><td colspan=\"4\">Subtotal</td><td>$" +
   subTotal().toFixed(2) + "</td></tr>");

document.write("<tr class=\"totals\"><td colspan=\"4\">Tax</td><td>$" +
   tax().toFixed(2) + "</td></tr>");

document.write("<tr class=\"totals\"><td colspan=\"4\">Shipping</td><td>$" +
   shipping().toFixed(2) + "</td></tr>");

document.write("<tr class=\"totals\"><td colspan=\"4\" class=\"focus\">Grand Total</td><td class=\"focus\">$" +
   total().toFixed(2) + "</td></tr>");