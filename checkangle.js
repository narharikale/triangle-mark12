const  angleInput = document.querySelectorAll(".angle-input");
const  showOutput   = document.querySelector("#show-output");

const anglesArray = []
console.log(angleInput);
document.addEventListener('submit' , onSubmithandler)

function onSubmithandler(e){
    e.preventDefault();

    for(i=0; i<angleInput.length; i++){
        anglesArray[i] = Number(angleInput[i].value);
    }
   

    let sum=0;
    anglesArray.map((angle)=>{
        sum=sum+angle;
    })

        if(sum == 180){

            showOutput.innerText = "Yes👌 these angles can make a triangle";
        }
        else{
            showOutput.innerText = "Oops😬 these angles cannot make a triangle";
        }
}
