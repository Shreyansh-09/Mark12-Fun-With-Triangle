var valueInput = document.querySelectorAll(".value-input")
var btnHypotenuse = document.querySelector("#hypotenuse-btn")
var outputDiv = document.querySelector("#output")

function sumOfSqure(a,b){
    var sumofSquare = a*a + b*b;
    return(sumofSquare);
}

function calculateHypotenuse(){
    var baseHeightSquareSum = sumOfSqure(Number(valueInput[0].value),Number(valueInput[1].value));
    var hypotenuse = Math.sqrt(baseHeightSquareSum);
    outputDiv.innerText = "The length of hypotenuse is " + hypotenuse.toFixed(4);
}


btnHypotenuse.addEventListener("click",calculateHypotenuse)