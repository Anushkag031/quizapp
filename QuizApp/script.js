const QuizDB = [
    {
        question: "Q1 : What is the full form of HTML?",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"Hypertext markup language",
        d:"HyperText markup language",
        ans: "ans4"
    },
    {
        question:" Q2: What is the full form of CSS?",
        a:"Cascading style sheets",
        b:"Cascading style sheep",
        c:"Cartoon style sheets",
        d:"Cascading super sheets",
        ans:"ans1"
    },
    {
        question:" Q3: What is the full form of HTTP?",
        a:"Hypertext transfer product",
        b:"Hypertext test protocol",
        c:"Hey transfer protocol",
        d:"Hypertext Transfer protocol",
        ans:"ans4"

    },
    {
        question:" Q4: What is the full form of JS?",
        a:"Javascript",
        b:"Javasuper",
        c:"Justscript",
        d:"Jordenshoes",
        ans:"ans1"
    }

];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const SUBMIT= document.querySelector('#SUBMIT');
 
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () =>{

  const questionList = QuizDB[questionCount];

  question.innerText = questionList.question;
  option1.innerText= questionList.a;
  option2.innerText= questionList.b;
  option3.innerText= questionList.c;
  option4.innerText= questionList.d;

}

loadQuestion();


const getCheckAnswer = () => {
   let answer;

   answers.forEach ((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
   });
   return answer;

};

SUBMIT.addEventListener('click', () => {
    const CheckedAnswer = getCheckAnswer();
    console.log(CheckedAnswer);

    if(CheckedAnswer === QuizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    if(questionCount < QuizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `  
        <h3> YOU SCORED ${score}/${QuizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        
        `;

        showScore.classList.remove('scoreArea');
        
    }


});




