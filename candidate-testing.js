const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let candidateAnswers = ['','','','',''];

let questions = ["Who was the first American woman in space? ", 
"True or false: 5000 meters = 5 kilometers. ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40","Trajectory", "3"]
//console.log(questions,"\n", correctAnswers);


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
//const input = require('readline-sync');
console.log("\n") //for output clarity
candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (i=0; i < questions.length; i++){
    candidateAnswers[i] = input.question(questions[i]); 
    }
  }
  
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*
if (candidateAnswer === correctAnswer){
  console.log("That is correct!")
} else{
  console.log("Incorrect answer.")
}*/
console.log(`
Candidate Name: ${candidateName}
1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}\n
2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}\n
3) ${questions[2]}
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}\n
4) ${questions[3]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}\n
5) ${questions[4]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}
`);

function countCorrect(candAns, correctAns){ 
  //let grade = 0;
  let numCorrect = 0;
 for (i=0; i<candAns.length; i++){
   numCorrect += Number(
     candAns[i].toUpperCase() ===
     correctAns[i].toUpperCase()
     );
  } 
 //grade = numCorrect / candAns.length * 100;
  return numCorrect;
}
let numCorrect = countCorrect(candidateAnswers, correctAnswers);
let grade =  numCorrect / questions.length * 100;
let result = "";
if (grade >= 80){
  result = "PASSED";
} else{
  result = "FAILED";
}

console.log(
`>>> Overall Grade: ${grade}% (${numCorrect} of 5 responses correct) <<<
>>> Status: ${result} <<<`
    )
}



function runProgram() {
   // TODO 1.1c: Ask for candidate's name //
   askForName();
  console.log("Hello", candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};