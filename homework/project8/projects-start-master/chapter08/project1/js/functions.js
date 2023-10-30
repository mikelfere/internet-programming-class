/* define your functions here */

function calculateTotal(quantity, price){
    return quantity*price;
}

function outputCartRow(item, total){
    document.write(
        "<tr>" +
            "<td><img src=\"" + item.product.filename + "\"></td>" +
            "<td>" + item.product.title + "</td>" +
            "<td>" + item.quantity + "</td>" +
            "<td>" + item.product.price + "</td>" +
            "<td>" + (item.product.price * item.quantity) + "</td>" +
        "</tr>"
    );
}






        
