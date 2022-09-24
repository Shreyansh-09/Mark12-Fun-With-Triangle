var valueInput = document.querySelectorAll(".value-input")
var btnHypotenuse = document.querySelector("#hypotenuse-btn")
var outputDiv = document.querySelector("#output")


function sumOfSqure(a,b){
    var sumofSquare = a*a + b*b;
    return(sumofSquare);
}

function calculateHypotenuse(){
    firstValue = valueInput[0].value;
    secondValue = valueInput[1].value;
    if(firstValue == "" || secondValue == ""){
        outputDiv.innerText = "Please enter the data."
    }
    else if(Number(firstValue) <= 0 || Number(secondValue) <= 0){
        outputDiv.innerText = "Value must be greater than 0."
    }
    else{
        var baseHeightSquareSum = sumOfSqure(Number(firstValue),Number(secondValue));
        var hypotenuse = Math.sqrt(baseHeightSquareSum);
        outputDiv.innerText = "The length of hypotenuse is " + hypotenuse.toFixed(4);
    }
}

btnHypotenuse.addEventListener("click",calculateHypotenuse)