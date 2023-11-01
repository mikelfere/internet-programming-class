var expenses = [];

function addArr(){
    var expense = document.getElementById("exp").value;
    try{
        if(expense == ""){
            throw "You haven't entered anything";
        }
        expense = Number(expense);
        if(isNaN(expense)){
            throw "You haven't entered a number";
        }
    }
    catch(err){
        document.getElementById("err-dis").innerHTML = "Error: " + err;
        return;
    }
    expenses.push(expense);
    document.getElementById("err-dis").innerHTML = ""
    document.getElementById("exp").value = "";
}

function displayData(){
    expenses.sort(function(a, b){return a-b});
    var median;
    if(expenses.length % 2 == 1){
        median = expenses[Math.floor(expenses.length/2)];
    }else{
        median = ((expenses[Math.floor(expenses.length/2)] + expenses[Math.floor(expenses.length/2)-1])/2);
    }
    document.getElementById("arr-dis").innerHTML = expenses;
    document.getElementById("med-dis").innerHTML = median;
}

function clearData(){
    document.getElementById("form1").reset();
    document.getElementById("err-dis").innerHTML = "";
    document.getElementById("arr-dis").innerHTML = "";
    document.getElementById("med-dis").innerHTML = "";
    expenses = [];
}