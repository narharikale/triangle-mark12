const formInput = document.querySelector(".formHypo")
const inputSidevalue = document.querySelectorAll(".inputside");
const showOutput = document.querySelector(".showHypo")

let firstside = 0;
let secondside = 0;

formInput.addEventListener('submit',submitHandler)

function submitHandler(e){
    e.preventDefault();

    firstside = Number(inputSidevalue[0].value )
    secondside = Number(inputSidevalue[1].value)
    
    showOutput.innerText = Math.sqrt((firstside*firstside) + (secondside*secondside)).toFixed(2);
}

