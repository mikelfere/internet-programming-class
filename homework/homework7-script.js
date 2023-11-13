let questions = [
    "what is the best programming language",
    "how many years are in a millenia",
    "will it be warm tomorrow",
    "how to learn programming",
    "who will win the next world cup in football"
];

let answer = [
    "Javascript, of course!",
    "A thousand years!",
    "No way! Winter is almost here!",
    "Practice, practice, practice!",
    "I am rooting for Brazil!",
    "I am sorry, I don't know!"
];

function isAsking(){
    alert("Hello there!");
    let ans = confirm("Do you want to ask me a question?");
    return ans;
}

function doQuestion(){
    if(isAsking()){
        document.getElementById("img").style.animationName="anim";
        document.getElementById("end-div").style.animationName="grad";
    }else{
        document.getElementById("end").innerHTML="Thank you for stopping by!<br/>Hope we meet again!";
        return;
    }
}

function ask(){
    let question = prompt("What is your question");
    dispAnswer(question);
}

function dispAnswer(question){
    document.getElementById("answer-div").style.animationFillMode = "forwards";
    document.getElementById("answer-div").style.animationName="ansr";
    for(let i = 0; i < questions.length; i++){
        if(question.toLowerCase() == questions[i]){
            document.getElementById("answer").innerHTML = answer[i];
            return;
        }
    }
    document.getElementById("answer").innerHTML = answer[answer.length - 1];
}

const clearBox = document.getElementById("clear");
const magician = document.getElementById("img");

clearBox.addEventListener("click", e=>{
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer-div").style.animationFillMode = "backwards";
})

magician.addEventListener("dblclick", e=>{
    ask();
})

document.addEventListener("keypress", e=>{
    if(e.key == "h"){
        /**questions.join("\n") formats the separator from a comma to a new line escape character */
        alert("These are the possible questions\n" + questions.join('\n'));
    }
})

document.addEventListener("keypress", e=>{
    if(e.key == "a"){
        alert("These are the possible answers\n" + answer.join('\n'));
    }
})

doQuestion();