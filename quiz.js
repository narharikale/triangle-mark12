
const quizForm = document.forms[0];
const changeColor = document.querySelectorAll(".quiz-div");
const updateScore = document.querySelector(".show-output");


console.log(quizForm)
const ans = ["right","right","wrong","right","right","wrong","wrong","wrong","wrong","right"]
let score = 0;
quizForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(quizForm);
    console.log(data);
    let index=0;
    for(let value of data){
       if(value[1] == ans[index]){
        changeColor[index].style.backgroundColor = "#137513d1";
        score++;
        
       }
       else{
        changeColor[index].style.backgroundColor = "#b30404d6";
       }
        index++;
       
    }
    updateScore.innerText = score;
    
    
});
   
















// fromInput.addEventListener('submit',(e)=>{
//       e.preventDefault();

//    const data = new FormData(fromInput);
    
//     for(let value of data){
//         let count= 0;
//         if(value[1] == answer[count] )
//         {
//             quizDiv[count].style.backgroundColor= "green";
//             score++;
//         }else{
//             quizDiv[count].style.backgroundColor= "red";
//         }
//         count++;
        
//     }
//     updateScore.innerText = score


// });


