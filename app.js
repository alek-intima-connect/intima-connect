
// RooBot AI placeholder
function launchChatbot() {
  alert("This will launch the RooBot AI Assistant. Integrate OpenAI or a custom NLP model here.");
}

// Interactive Quiz placeholder
function startQuiz() {
  const questions = [
    {
      question: "How confident are you discussing sexual health topics?",
      choices: ["Not at all", "Somewhat", "Very"],
      score: [0, 1, 2]
    },
    {
      question: "Have you learned about consent in school?",
      choices: ["Yes", "No", "I’m not sure"],
      score: [2, 0, 1]
    }
  ];

  let total = 0;
  for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i].question + "\n" + questions[i].choices.join(" / "));
    let idx = questions[i].choices.indexOf(answer);
    total += (idx >= 0) ? questions[i].score[idx] : 0;
  }

  if (total >= 4) {
    alert("You’re well-informed! Keep exploring.");
  } else {
    alert("There’s more to learn—explore our lessons and tools.");
  }
}
