var firstSide = document.querySelector("#first-side")
var secondSide = document.querySelector("#second-side")
var thirdSide = document.querySelector("#third-side")
var areaBtn = document.querySelector("#area-calculate-btn");
var outputDiv = document.querySelector("#output");

function triangleValidation(side1,side2,side3){
    if((side1+side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)){
        return true;
    }
    else{
        return false;
    }
}

function clickeventHandler(){
    var a = Number(firstSide.value)
    var b = Number(secondSide.value)
    var c = Number(thirdSide.value)
    var validateTriangle = triangleValidation(a,b,c);
    if(validateTriangle){
        var s = (a + b + c)/2;
        var area = Math.sqrt((s*(s-a)*(s-b)*(s-c)));
        outputDiv.innerText = "Area of a triangle using heron's formula is " + area.toFixed(4) + " units.";
    }
    else{
        outputDiv.innerText = "Enter valid side lengths such that each side lengths.";
    }

}



areaBtn.addEventListener("click", clickeventHandler)