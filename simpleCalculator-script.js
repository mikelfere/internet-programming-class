function addition(){
    const message1 = document.getElementById("p01-1");
    const message2 = document.getElementById("p01-2");
    const result = document.getElementById("p02");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let isValid = true;
    message1.innerHTML = "";
    message2.innerHTML = "";
    result.innerHTML = "";
    try{
        if(num1.trim() == "") throw "Number 1 is empty";
        if(isNaN(num1)) throw "Number 1 is not a number";
        num1 = Number(num1);
    }catch(error){
        message1.innerHTML = "Error:" + error;
        isValid = false;
    }
    try{
        if(num2.trim() == "") throw "Number 2 is empty";
        if(isNaN(num2)) throw "Number 2 is not a number";
        num2 = Number(num2);
    }catch(error){
        message2.innerHTML = "Error:" + error;
        isValid = false;
    }
    if(isValid){
        message1.innerHTML = "";
        message2.innerHTML = "";
        result.innerHTML = num1 + num2;
    }
}