const myQuestions = { // list of questions
  1: {
    question: "Pirmā nedēļas diena?",
    answer1: "Otrdiena",
    answer2: "Pirmdiena",
    answer3: "Sestdiena",
    correctAnswer: "Pirmdiena"
  },
  2: {
    question: "Kādā krāsā ir sniegs?",
    answer1: "Balts",
    answer2: "Melns",
    answer3: "Zaļš",
    correctAnswer: "Balts"
  },
  3: {
    question: "Kā sauc slavenāko suni?",
    answer1: "Peksis",
    answer2: "Muris",
    answer3: "Reksis",
    correctAnswer: "Reksis"
  }
}

var currentQuestion = 0;
var points = 0;

function nextQuestion() {
  if (currentQuestion == 0) { 
    showButtons(); 
  }
  currentQuestion += 1;
  document.getElementById("questionField").innerHTML = myQuestions[currentQuestion]["question"];
  document.getElementById("answer1").innerHTML = myQuestions[currentQuestion]["answer1"];
  document.getElementById("answer2").innerHTML = myQuestions[currentQuestion]["answer2"];
  document.getElementById("answer3").innerHTML = myQuestions[currentQuestion]["answer3"];
}

function checkAnswer(answer) {
  if (answer == myQuestions[currentQuestion]["correctAnswer"]) {
    points += 1;
  }

  if (Object.keys(myQuestions).length > currentQuestion) {
    nextQuestion(); }
  else { showScore(); }
}

function showButtons() {
  document.getElementById("answer1").style.visibility = "visible";
  document.getElementById("answer2").style.visibility = "visible";
  document.getElementById("answer3").style.visibility = "visible";
}

function showScore() {
  document.getElementById("questionField").innerHTML = "Paldies, ka piedalījies! Ieguvi "+points+" punktus!";
  document.getElementById("answer1").style.visibility = "hidden";
  document.getElementById("answer2").style.visibility = "hidden";
  document.getElementById("answer3").style.visibility = "hidden";
  document.getElementById("go").style.visibility = "hidden";
}