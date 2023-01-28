// Declaring the questions array object
const ques = [
    {
        question: "Q1. In which part of the HTML code, the <meta> tag can be included?",
        a: "<head> tag",
        b: "</head> tag",
        c: "<description> tag",
        d: "None of the above.",
        answer: "ans-1"
    },
    {
        question: "Q2. Which of the following tag can be used to bold the content on the web page?",
        a: "<bold>",
        b: "<active>",
        c: "<b>",
        d: "None of the above",
        answer: "ans-3"
    },
    {
        question: "Q3. Which of the following option is correct to create a clickable image in HTML?",
        a: "<a href=”........”> <img src=”.....” />   </a>",
        b: "<a =”........”> <img src=”.....” />   </a>",
        c: "<a href=”........”> <img =”.....” />   </a>",
        d: "<a =”........”> <img =”.....” />   </a>",
        answer: "ans-1"
    },
    {
        question: "Q4. Which of the following tag is used to create a combo box (or drop-down box)?",
        a: "<list>",
        b: "<select>",
        c: "<input type = ” dropdown”>",
        d: "<ul>",
        answer: "ans-3"
    },
    {
        question: "Q5. Which of the following option can be used to create a radio button in HTML?",
        a: "<input =”radio”/>",
        b: "<input type=”radio”/>",
        c: "<input type=”radiobutton”/>",
        d: "<input type=”buttonradio”/>",
        answer: "ans-2"
    }
];

// function to initiate the quiz questions
const startQuiz = () => {
    document.getElementById("toggle-start").style.display="none";
    document.getElementById("questions").style.display="block";
    document.getElementById("btn-previous").style.display="none";
    progressBar.style.width = parseInt(progressPoints) + "%";
}

// Declaring the variables to populate the questions, progress bar, next and previous buttons
const question = document.querySelector('#question');
const option1 = document.querySelector('#option-1');
const option2 = document.querySelector('#option-2');
const option3 = document.querySelector('#option-3');
const option4 = document.querySelector('#option-4');
const next = document.querySelector('#btn-next');
const prev = document.querySelector('#btn-previous');
const answers = document.querySelectorAll('.answer');
const showAnswers = document.querySelector('#displayScore');
const progressBar = document.getElementById("quiz-progress");

let counter = 0;
let score = 0;
let progressPoints = 0;

// loading the questions
const loadQuestion = () => {
    let questionLists = ques[counter];
    question.innerText = questionLists.question;
    option1.innerText = questionLists.a;
    option2.innerText = questionLists.b;
    option3.innerText = questionLists.c;
    option4.innerText = questionLists.d;
}
loadQuestion();

// fetching the ID of the selected option. 
const getCheckedAnswer = () => {
    let answer;
    answers.forEach((checkedAnswer) => {
        if (checkedAnswer.checked) {
            answer = checkedAnswer.id;
        }        
    })
    return answer;
};

// Reloading the quiz when clicked on Re-attempt Quiz button
const quizReload = () => {
    location.reload();
    document.getElementById("questions").style.display="none";
    document.getElementById("toggle-start").style.display="block";
}

// click event for previous button
prev.addEventListener('click', () => {    
    counter--;
    score--;
    loadQuestion();
    if (counter == 0) {
        document.getElementById("btn-previous").style.display="none";
    }
});

// click event for next button
next.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    document.getElementById("btn-previous").style.display="block";
    if (checkedAnswer === ques[counter].answer) {
        score++;
        progressPoints += (100/ques.length);
        progressBar.style.width = parseInt(progressPoints) + "%";
        progressBar.innerText = parseInt(progressPoints) + "%";
    }

    counter++; // counter to check the question count and number iteration to show summary of scores
    if (counter < ques.length) {
        loadQuestion();
    }else {
        progressBar.style.width = parseInt(progressPoints) + "%";
        progressBar.innerText = parseInt(progressPoints) + "%";
        document.getElementById("btn-next").style.display="none";
        document.getElementById("btn-previous").style.display="none";
        let msg = "";
        if (score < 3) {
            msg = "If you want to improve your score, consider taking the test again!!!";
        }else {
            msg="Congratulations! You obtained a passing score on the test.";
        }
        showAnswers.innerHTML = `
            <h3>You scored ${score}/${ques.length} </h3>
            <h4>${msg}</h4>
            <button type="button" class="btn btn-primary" id="re-attempt" onclick="quizReload()">Re-Attempt Quiz</button>
        `;

        showAnswers.classList.remove('scores');
    }
});