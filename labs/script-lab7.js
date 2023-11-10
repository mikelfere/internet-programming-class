// const box1 = document.getElementById("box-1");
// const box2 = document.getElementById("box-2");
// const box3 = document.getElementById("box-3");
// const box4 = document.getElementById("box-4");

let isPurple = true;

function changeColor(el){
    if(isPurple){
        el.style.backgroundColor = "white";
        el.style.color = "black";
        isPurple = false;
    }else{
        el.style.backgroundColor = "darkmagenta";
        el.style.color = "white";
        isPurple = true;
    }
}

function placePicture(el){
    el.style.backgroundImage = "url('images/mrmagoo.jpg')";
}

function removeBox(el){
    el.style.backgroundColor = "black";
    el.style.color = "black";
}

function resetAll(){
    const boxes = document.querySelectorAll(".box");
    for(let box of boxes){
        box.style.backgroundColor = "darkmagenta";
        box.style.color = "white";
        box.style.backgroundImage = "";
    }
}


// box1.addEventListener("click", ()=>{changeColor(box1);});
// box2.addEventListener("mouseover", () => {placePicture(box2);});
// box3.addEventListener("dblclick", () => {removeBox(box3);});
// box4.addEventListener("click", () => {resetAll(box4);});

