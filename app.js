var triangleInput = document.querySelectorAll(".angle-input");
var triangleBtn = document.querySelector("#triangle-btn-check");
var outputDiv = document.querySelector("#output");

function calculateSum(angle1,angle2,angle3){
    var sum = angle1 + angle2 + angle3;
    return(sum);
}


function clickEventHandler(){
    var angle1 = triangleInput[0].value;
    var angle2 = triangleInput[1].value;
    var angle3 = triangleInput[2].value;
    if(angle1 == "" || angle2 == "" || angle3 == ""){
        outputDiv.innerText = "Please enter the data."
    }
    else if(Number(angle1) <= 0 || Number(angle2) <= 0 || Number(angle3) <= 0){
        outputDiv.innerText = "Angle value must be greater than 0."
    }
    else{
        var sumOfAngles = calculateSum(Number(angle1),Number(angle2),Number(angle3));
        if(sumOfAngles == 180){
            outputDiv.innerText = "Yay, the angles form a triangle!";
        }
        else{
            outputDiv.innerText = "Oh Oh! The angle doesn't form a triangle."
        }
    }
    
}


triangleBtn.addEventListener("click",clickEventHandler)