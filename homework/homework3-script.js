function totalCost(){
    let cost = 0;
    if(document.form1.fish[0].checked){
        cost += 15;
    }
    if(document.form1.fish[1].checked){
        cost += 14;
    }
    if(document.form1.fish[2].checked){
        cost += 19;
    }
    if(document.form1.fish[3].checked){
        cost += 13;
    }
    if(document.form1.ch_1.checked){
        cost += 3.50;
    }
    if(document.form1.ch_2.checked){
        cost += 3.50;
    }
    if(document.form1.ch_3.checked){
        cost += 3.50;
    }
    document.form1.total.value = cost.toFixed(2);
}