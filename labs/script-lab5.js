function calc(t){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("p01");
    let err1 = document.getElementById("err-1");
    let err2 = document.getElementById("err-2");
    let isValid = true;
    clear();
    try{
        if(num1 == "")throw "Empty input";
        if(isNaN(num1)) throw "Not a number";
    }catch(error){
        err1.innerHTML = "Error for Number 1: " + error;
        isValid = false;
    }
    try{
        if(num2 == "")throw "Empty input";
        if(isNaN(num2)) throw "Not a number";
        num2 = Number(num2);
        if(num2 == 0) throw "Cannot divide by 0";
    }catch(error){
        err2.innerHTML = "Error for Number 2: " + error;
        isValid = false;
    }
    
    num1 = Number(num1);
    num2 = Number(num2);

    if(isValid){
        switch(t){
            case 'a':
                result.innerHTML = "The sum is " + (num1+num2);
                break;
            case 'b':
                result.innerHTML = "The difference is " + (num1-num2);
                break;
            case 'c':
                result.innerHTML = "The product is " + (num1*num2);
                break;
            case 'd':
                result.innerHTML = "The quotient is " + (num1/num2);
                break;
        } 
    }

}

function clear(){
    document.getElementById("p01").innerHTML = "";
    document.getElementById("err-1").innerHTML = "";
    document.getElementById("err-2").innerHTML = "";
}

function clearAll(){
    clear();
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}