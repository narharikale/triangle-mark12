

const calculationBlock = document.querySelectorAll(".area-calc-div");
const finalOutput = document.querySelectorAll(".show-output");

const inputInOption1 = document.querySelectorAll(".inputInOption1");
const inputInOption2 = document.querySelectorAll(".inputInOption2");
const inputInOption3 = document.querySelectorAll(".inputInOption3");


const radioArray = document.forms[0].elements;
console.log(radioArray)



radioArray[0].addEventListener('change', ()=>{
    showOrHideBlock(calculationBlock, 0, 1, 2);
})
radioArray[1].addEventListener('change', ()=>{
    showOrHideBlock(calculationBlock, 1, 0, 2);
})
radioArray[2].addEventListener('change', ()=>{
    showOrHideBlock(calculationBlock, 2, 1, 0);
})

function showOrHideBlock(showDiv, showDivIndex, hideDivIndex1, hideDivIndex2){
    showDiv[showDivIndex].style.display = "block";
    showDiv[hideDivIndex1].style.display = "none";
    showDiv[hideDivIndex2].style.display = "none";
}

document.forms[1].addEventListener('submit', (e)=>{
    e.preventDefault();
    const b= Number(inputInOption1[0].value)
    const h= Number(inputInOption1[1].value)
    finalOutput[0].innerText = ((b*h)/2).toFixed(2)

}, false)

document.forms[2].addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const a= Number(inputInOption2[0].value)
    const b= Number(inputInOption2[1].value)
    const c= Number(inputInOption2[2].value)

    if((a+b)>c && (b+c)>a && (a+c)>b){
    const s=(a+b+c)/2;
    finalOutput[1].innerText= (Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));
    }
    else{
    //     errorDiv.style.display = "block";
    console.log(error)
 }  
}, false )

document.forms[3].addEventListener('submit',(e)=>{
    e.preventDefault();
    const b = Number(inputInOption3[0].value)
    const c = Number(inputInOption3[1].value)
    const A = Number(inputInOption3[2].value)
    finalOutput[2].innerText= ((b*c*Math.sin(A*Math.PI/180))/2).toFixed(2);  
}, false )

        

