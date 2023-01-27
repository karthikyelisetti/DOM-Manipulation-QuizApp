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

const startQuiz = () => {
    document.getElementById("toggle-start").style.display="none";
    document.getElementById("questions").style.display="block";
}
const question = document.querySelector('#question');
const option1 = document.querySelector('#option-1');
const option2 = document.querySelector('#option-2');
const option3 = document.querySelector('#option-3');
const option4 = document.querySelector('#option-4');
const submit = document.querySelector('#btn-submit');
const answers = document.querySelectorAll('.answer');
const showAnswers = document.querySelector('#displayScore');

let counter = 0;
let score = 0;
const loadQuestion = () => {
    let questionLists = ques[counter];
    question.innerText = questionLists.question;
    option1.innerText = questionLists.a;
    option2.innerText = questionLists.b;
    option3.innerText = questionLists.c;
    option4.innerText = questionLists.d;

}
loadQuestion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((checkedAnswer) => {
        if (checkedAnswer.checked) {
            answer = checkedAnswer.id;
        }        
    })
    return answer;
};

const quizReload = () => {
    location.reload();
    document.getElementById("questions").style.display="none";
    document.getElementById("toggle-start").style.display="block";
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    if (checkedAnswer === ques[counter].answer) {
        score++;
    }

    counter++;
    if (counter < ques.length) {
        loadQuestion();
    }else {
        document.getElementById("btn-submit").style.display="none";
        let msg = "";
        if (score < 3) {
            msg = "If you want to improve your score, consider taking the test again!!!";
        }else {
            msg="Congratulations! You obtained a passing score on the test.";
        }
        showAnswers.innerHTML = `
            <h3>You scored ${score}/${ques.length} </h3>
            <p>${msg}</p>
            <button type="button" class="btn btn-primary" id="re-attempt" onclick="quizReload()">Re-Attempt Quiz</button>
        `;

        showAnswers.classList.remove('scores');
    }
});