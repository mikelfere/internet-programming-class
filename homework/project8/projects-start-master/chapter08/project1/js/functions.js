/* define your functions here */

function calculateTotal(quantity, price){
    return quantity*price;
}

function outputCartRow(item, total){
    document.write(
        "<tr>" +
            "<td><img src=\"images/" + item.product.filename + "\"></td>" +
            "<td>" + item.product.title + "</td>" +
            "<td>" + item.quantity + "</td>" +
            "<td>" + item.product.price.toFixed(2) + "</td>" +
            "<td>" + total.toFixed(2) + "</td>" +
        "</tr>"
    );
}

function subTotal(){
    let subTot = 0;
    for(element of cart){
       subTot += calculateTotal(element.quantity, element.product.price);
    }
    return subTot;
 }

 function tax(){
    return tax_rate*subTotal();
 }

 function shipping(){
    if(subTotal() > shipping_threshold){
       return 0;
    }
    return 40;
 }
        
 function total(){
    return (subTotal() + shipping() + tax());
 }