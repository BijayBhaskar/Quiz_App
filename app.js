import { quizQuestions } from "./quiz.js";

let currentQuestionIndex = 0;
let timeLeft = 780;
let attempted = 0;
let correctAnswers = 0;
let totalQuestions = quizQuestions.length;
let timer;
let isTimeUp = false;

const homeScreen = document.getElementById("home");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const startQuizBtn = document.getElementById("startQuizBtn");
const submitQuizBtn = document.getElementById("submitQuizBtn");
const questionContainer = document.getElementById("question-container");
const timeLeftDisplay = document.getElementById("time-left");
const scorePercentageDisplay = document.getElementById("score-percentage");

const totalQuestionsDisplay = document.getElementById("total-questions");
const correctAnswersDisplay = document.getElementById("correct-answers");
const incorrectAnswersDisplay = document.getElementById("incorrect-answers");

startQuizBtn.addEventListener("click", function () {
    homeScreen.classList.add("d-none");
    quizContainer.classList.remove("d-none");
    startTimer();
    displayQuestion();
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeLeftDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            isTimeUp = true;
            endQuiz();
        }
    }, 1000);
}

function displayQuestion() {
    questionContainer.innerHTML = "";

    if (currentQuestionIndex < quizQuestions.length) {
        const questionData = quizQuestions[currentQuestionIndex];

        const questionElement = document.createElement("h5");
        questionElement.textContent = `Q${currentQuestionIndex + 1}: ${questionData.question}`;
        questionContainer.appendChild(questionElement);

        questionData.options.forEach((option, index) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("form-check");

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer";
            radio.value = index;
            radio.classList.add("form-check-input");
            radio.onclick = () => handleAnswerSelection(index);

            const label = document.createElement("label");
            label.classList.add("form-check-label");
            label.textContent = option;

            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            questionContainer.appendChild(optionDiv);
        });

        if (currentQuestionIndex === totalQuestions - 1) {
            submitQuizBtn.classList.remove("d-none");
        } else {
            submitQuizBtn.classList.add("d-none");
        }
    } else {
        submitQuizBtn.classList.remove("d-none");
    }
}

function handleAnswerSelection(selectedIndex) {
    const questionData = quizQuestions[currentQuestionIndex];

    if (selectedIndex === questionData.correctIndex) {
        correctAnswers++;
    }

    attempted++;
    moveToNextQuestion();
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        submitQuizBtn.classList.remove("d-none");
    }
}

function endQuiz() {
    quizContainer.classList.add("d-none");
    resultContainer.classList.remove("d-none");
    clearInterval(timer);

    let percentageScore = Math.round((correctAnswers / totalQuestions) * 100);
    scorePercentageDisplay.textContent = `${percentageScore}%`;

    totalQuestionsDisplay.textContent = totalQuestions;
    correctAnswersDisplay.textContent = correctAnswers;
    incorrectAnswersDisplay.textContent = totalQuestions - correctAnswers;

    submitQuizBtn.classList.add("d-none");
}

submitQuizBtn.addEventListener("click", function () {
    if (!isTimeUp) {
        endQuiz();
    }
});




// import { quizQuestions } from "./quiz.js";

// let currentQuestionIndex = 0;
// let timeLeft = 780; // 13 minutes in seconds
// let attempted = 0;
// let correctAnswers = 0;
// let totalQuestions = quizQuestions.length;
// let timer;
// let isTimeUp = false; // Flag to check if time has expired

// // Select elements
// const homeScreen = document.getElementById("home");
// const quizContainer = document.getElementById("quiz-container");
// const resultContainer = document.getElementById("result-container");
// const startQuizBtn = document.getElementById("startQuizBtn");
// const submitQuizBtn = document.getElementById("submitQuizBtn");
// const questionContainer = document.getElementById("question-container");
// const timeLeftDisplay = document.getElementById("time-left");
// const scorePercentageDisplay = document.getElementById("score-percentage");

// // **NEW** - Select elements for additional results
// const totalQuestionsDisplay = document.getElementById("total-questions");
// const correctAnswersDisplay = document.getElementById("correct-answers");
// const incorrectAnswersDisplay = document.getElementById("incorrect-answers");

// // Start Quiz
// startQuizBtn.addEventListener("click", function () {
//     homeScreen.classList.add("d-none");
//     quizContainer.classList.remove("d-none");
//     startTimer();
//     displayQuestion();
// });

// // Start Timer
// function startTimer() {
//     timer = setInterval(() => {
//         timeLeft--;
//         const minutes = Math.floor(timeLeft / 60);
//         const seconds = timeLeft % 60;
//         timeLeftDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             isTimeUp = true; // Mark that time is up
//             endQuiz(); // Auto-submit the quiz
//         }
//     }, 1000);
// }

// // Display Question
// function displayQuestion() {
//     questionContainer.innerHTML = ""; // Clear previous question

//     if (currentQuestionIndex < quizQuestions.length) {
//         const questionData = quizQuestions[currentQuestionIndex];

//         // Question Title
//         const questionElement = document.createElement("h5");
//         questionElement.textContent = `Q${currentQuestionIndex + 1}: ${questionData.question}`;
//         questionContainer.appendChild(questionElement);

//         // Options
//         questionData.options.forEach((option, index) => {
//             const optionDiv = document.createElement("div");
//             optionDiv.classList.add("form-check");

//             const radio = document.createElement("input");
//             radio.type = "radio";
//             radio.name = "answer";
//             radio.value = index;
//             radio.classList.add("form-check-input");
//             radio.onclick = () => handleAnswerSelection(index);

//             const label = document.createElement("label");
//             label.classList.add("form-check-label");
//             label.textContent = option;

//             optionDiv.appendChild(radio);
//             optionDiv.appendChild(label);
//             questionContainer.appendChild(optionDiv);
//         });

//         // Show "Submit Quiz" button if it's the last question
//         if (currentQuestionIndex === totalQuestions - 1) {
//             submitQuizBtn.classList.remove("d-none");
//         } else {
//             submitQuizBtn.classList.add("d-none");
//         }
//     } else {
//         // If user finished all questions, show submit button
//         submitQuizBtn.classList.remove("d-none");
//     }
// }

// // Handle Answer Selection
// function handleAnswerSelection(selectedIndex) {
//     const questionData = quizQuestions[currentQuestionIndex];

//     // Check if the selected answer is correct
//     if (selectedIndex === questionData.correctIndex) {
//         correctAnswers++;
//     }

//     attempted++;
//     moveToNextQuestion();
// }

// // Move to Next Question
// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizQuestions.length) {
//         displayQuestion();
//     } else {
//         // If all questions are answered before time ends, allow manual submission
//         submitQuizBtn.classList.remove("d-none");
//     }
// }

// // End Quiz & Show Results
// function endQuiz() {
//     quizContainer.classList.add("d-none");
//     resultContainer.classList.remove("d-none");
//     clearInterval(timer);

//     // Calculate Percentage Score
//     let percentageScore = Math.round((correctAnswers / totalQuestions) * 100);
//     scorePercentageDisplay.textContent = `${percentageScore}%`;

//     // **NEW** - Display additional result details
//     totalQuestionsDisplay.textContent = totalQuestions;
//     correctAnswersDisplay.textContent = correctAnswers;
//     incorrectAnswersDisplay.textContent = totalQuestions - correctAnswers;

//     // Hide submit button after quiz is over
//     submitQuizBtn.classList.add("d-none");
// }

// // Manually Submit Quiz (Only if user finishes early)
// submitQuizBtn.addEventListener("click", function () {
//     if (!isTimeUp) {
//         endQuiz(); // Only submit if time is NOT up
//     }
// });
