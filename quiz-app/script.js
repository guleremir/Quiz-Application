const quizData = [
    {
        question: 'What century are we in?',
        a: '20',
        b: '21',
        c: '22',
        d: '19',
        correct: 'b'

    }, {
        question: 'What is the best programming language?',
        a:'Java',
        b:'JavaScript',
        c:'Python',
        d:'C#',
        correct: 'b'
    }, {
        question: 'Which is turkish food?',
        a: 'Sushi',
        b: 'Noodle',
        c: 'Kebap',
        d: 'Mocha',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'JSON',
        d: 'Helicopters Terminal Mercedes Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '1996',
        c: '1997',
        d: 'None of the above',
        correct: 'd'
    }

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
            `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Try Again</button>`;
        }
    }
});