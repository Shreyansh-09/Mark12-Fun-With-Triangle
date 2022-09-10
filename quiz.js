var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector("#output");

var rightAns = ["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","100°","30°","a+b+c","no","45°"]

function clickEventHandler(){
    var score = 0;
    var index = 0;
    var results = new FormData(quizForm);
    for(var value of results.values()){
        if(value === rightAns[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "Your score is " + score + "."
}


submitBtn.addEventListener("click",clickEventHandler)