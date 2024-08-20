const num1 = Math.ceil(Math.random()*10);

//console.log(num1);

const num2 = Math.ceil(Math.random()*10);

//console.log(num2);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

let score = 0;

questionEl.innerText = `What is ${num1} multiply ${num2} ?`

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    console.log(userAns, typeof userAns);
    if (userAns == correctAns){
        score++;
        console.log(score);
    }
    else{
        score--;
        console.log(score);

    }


})

