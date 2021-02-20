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
    console.log("\n"); //New line for clarity.
  }
  
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  // Add function for DRY.
  // This function returns a template literal.
  function questionAndAns(questionNum){
    let newLine = "\n";
    if (questionNum === questions.length){
      newLine = "";
    }
    return `${questionNum}) ${questions[questionNum - 1]}
Your Answer: ${candidateAnswers[questionNum - 1]}
Correct Answer: ${correctAnswers[questionNum -1]}\n${newLine}`
  } // End of function //

// Print the overall template literal.
console.log(`Candidate Name: ${candidateName}
${questionAndAns(1)}${questionAndAns(2)}${questionAndAns(3)}${questionAndAns(4)}${questionAndAns(5)}`);


/*  Below was before DRY.
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
*/

//Calculate the number of correct answers and grade.
let numCorrect = 0;
 for (i=0; i < questions.length; i++){
   numCorrect += Number(
     candidateAnswers[i].toUpperCase() ===
     correctAnswers[i].toUpperCase()
     );
  } 
 
let grade =  numCorrect / questions.length * 100;
let result = "";
if (grade >= 80){
  result = "PASSED";
} else{
  result = "FAILED";
}
// Print overall grade and status with a template literal.
console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<<
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