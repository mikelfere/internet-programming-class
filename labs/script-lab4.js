function average(){
    let sum = parseFloat(document.form1.num1.value) + parseFloat(document.form1.num2.value) + parseFloat(document.form1.num3.value);
    let avg = sum/3;
    document.form1.avg.value = avg.toFixed(2);
}

function tipAndTotal(){
    const TIP = 0.2;
    let tip = parseFloat(document.form2.bill.value) * TIP;
    let total = parseFloat(document.form2.bill.value) + tip;
    document.form2.tip.value = tip.toFixed(2);
    document.form2.total.value = total.toFixed(2);
}