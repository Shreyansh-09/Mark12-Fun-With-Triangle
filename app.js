var triangleInput = document.querySelectorAll(".angle-input");
var triangleBtn = document.querySelector("#triangle-btn-check");
var outputDiv = document.querySelector("#output");

function calculateSum(angle1,angle2,angle3){
    var sum = angle1 + angle2 + angle3;
    return(sum);
}


function clickEventHandler(){
    var sumOfAngles = calculateSum(Number(triangleInput[0].value),Number(triangleInput[1].value),Number(triangleInput[2].value));
    if(sumOfAngles === 180){
        outputDiv.innerText = "Yay, the angles form a triangle!";
    }
    else{
        outputDiv.innerText = "Oh Oh! The angle doesn't form a triangle."
    }
}


triangleBtn.addEventListener("click",clickEventHandler)