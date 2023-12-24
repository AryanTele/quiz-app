const questions = [
  {
    question:
      "Which Indian mathematician and astronomer provided an accurate approximation of the value of pi in the 5th century?",
    answers: [
      { text: "Aryabhata", correct: true },
      { text: "Brahmagupta", correct: false },
      { text: "Bhaskara II", correct: false },
      { text: "Varahamihira", correct: false },
    ],
  },
  {
    question:
      "The Maurya Empire, founded by Chandragupta Maurya, was succeeded by his grandson. Who was Chandragupta's grandson?",
    answers: [
      { text: "Ashoka", correct: false },
      { text: "Bindusara", correct: true },
      { text: "Samudragupta", correct: false },
      { text: "Chandragupta II", correct: false },
    ],
  },
  {
    question:
      "Who was the Mughal emperor responsible for the construction of the Taj Mahal?",
    answers: [
      { text: "Akbar", correct: false },
      { text: "Shah Jahan", correct: true },
      { text: "Aurangzeb", correct: false },
      { text: "Babur", correct: false },
    ],
  },
  {
    question: 'Which Indian state is known as the "Land of Five Rivers"?',
    answers: [
      { text: "Punjab", correct: true },
      { text: "Haryana", correct: false },
      { text: "Uttar Pradesh", correct: false },
      { text: "Bihar", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currQuesIndex = 0;
let score = 0;

function startQuiz() {
  currQuesIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
