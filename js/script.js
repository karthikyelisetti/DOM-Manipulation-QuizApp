const ques = [
    {
        question: "Q1. In which part of the HTML code, the <meta> tag can be included?",
        a: "<head> tag",
        b: "</head> tag",
        c: "<description> tag",
        d: "None of the above.",
        answer: "ans1"
    },
    {
        question: "Q2. Which of the following tag can be used to bold the content on the web page?",
        a: "<bold>",
        b: "<active>",
        c: "<b>",
        d: "None of the above",
        answer: "'<b>' tag is used to bold the content in HTML."
    },
    {
        question: "Q3. Which of the following option is correct to create a clickable image in HTML?",
        a: "<a href=”........”> <img src=”.....” />   </a>",
        b: "<a =”........”> <img src=”.....” />   </a>",
        c: "<a href=”........”> <img =”.....” />   </a>",
        d: "<a =”........”> <img =”.....” />   </a>",
        answer: "To create a clickable image in HTML, we can use the option a for the same."
    },
    {
        question: "Q4. Which of the following tag is used to create a combo box (or drop-down box)?",
        a: "<list>",
        b: "<select>",
        c: "<input type = ” dropdown”>",
        d: "<ul>",
        answer: "To create a checkbox in HTML, we can use the following code - <input type=checkbox/>."
    },
    {
        question: "Q5. Which of the following option can be used to create a radio button in HTML?",
        a: "<input =”radio”/>",
        b: "<input type=”radio”/>",
        c: "<input type=”radiobutton”/>",
        d: "<input type=”buttonradio”/>",
        answer: "To create a radio button in HTML, we can use - <input type=”radio”/>."
    }
];

const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option-2');
const option3 = document.querySelector('#option-3');
const option4 = document.querySelector('#option-4');
const submit = document.querySelector('#btn-submit');

let counter = 0;
const loadQuestion = () => {
    let questionLists = ques[counter];
    question.innerText = questionLists.question;
    option1.innerText = questionLists.a;
    option2.innerText = questionLists.b;
    option3.innerText = questionLists.c;
    option4.innerText = questionLists.d;
}

loadQuestion();