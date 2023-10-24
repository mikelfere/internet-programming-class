function myFunction(){
    const message = document.getElementById("p01");
    let x = document.getElementById("demo").value;
    try{
        if(x.trim()=="") throw "empty";
        if(isNaN(x)) throw "not a number";
        x=Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }catch(x){
        message.innerHTML = "input is " + x;
    }
}