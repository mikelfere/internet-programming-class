function doOrder(){
    // alert("called function");
    var cost = 0;
    if(document.form1.size[0].checked){
        cost = 12.0;
    }
    if(document.form1.size[1].checked){
        cost = 14.0;
    }
    if(document.form1.size[2].checked){
        cost = 16.0;
    }
    if(document.form1.onion.checked){
        cost+=1.5;
    }
    if(document.form1.pepper.checked){
        cost+=1.5;
    }
    if(document.form1.olive.checked){
        cost+=1.5;
    }
    if(document.form1.sausage.checked){
        cost+=1.5;
    }
    document.form1.total.value=cost.toFixed(2);
}