function nameSort(){
    let names = [];
    names.push(document.getElementById("std-1").value);
    names.push(document.getElementById("std-2").value);
    names.push(document.getElementById("std-3").value);
    names.push(document.getElementById("std-4").value);
    names.push(document.getElementById("std-5").value);
    for(let i = 0; i < names.length; i++){
        if(names[i] == ""){
            document.getElementById("name-sort").innerHTML = "Fill all the names";
            return;
        }
    }
    names.sort();
    document.getElementById("name-sort").innerHTML = names;
}

function expenseSort(){
    let expenses = [];
    expenses.push(document.getElementById("d-1").value);
    expenses.push(document.getElementById("d-2").value);
    expenses.push(document.getElementById("d-3").value);
    expenses.push(document.getElementById("d-4").value);
    expenses.push(document.getElementById("d-5").value);
    expenses.push(document.getElementById("d-6").value);
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i] == ""){
            document.getElementById("expense-sort").innerHTML = "Fill all the expenses";
            return;
        }
        expenses[i] = Number(expenses[i]);
        if(isNaN(expenses[i])){
            document.getElementById("expense-sort").innerHTML = "Fill all the expenses with valid values";
            return;
        }
    }
    expenses.sort(function(a, b){return a-b});
    document.getElementById("expense-sort").innerHTML = expenses;
    document.getElementById("smallest-val").innerHTML = "The smallest value is " + expenses[0];
    document.getElementById("largest-val").innerHTML = "The largest value is " + expenses[expenses.length-1];
}

function nameClear(){
    document.getElementById("form-1").reset();
    document.getElementById("name-sort").innerHTML="";
}

function expenseClear(){
    document.getElementById("form-2").reset();
    document.getElementById("expense-sort").innerHTML="";
    document.getElementById("smallest-val").innerHTML = "";
    document.getElementById("largest-val").innerHTML = "";
}