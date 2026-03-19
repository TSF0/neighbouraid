let questions = JSON.parse(localStorage.getItem("questions")) || [];

function postQuestion() {
  let username = document.getElementById("username").value;
  let category = document.getElementById("category").value;
  let questionText = document.getElementById("question").value;

  if (username.trim() === "" || questionText.trim() === "") {
    alert("Please enter your name and question");
    return;
  }

  questions.push({
    user: username,
    category: category,
    question: questionText,
    answers: [],
    status: "Open"
  });

  localStorage.setItem("questions", JSON.stringify(questions));

  document.getElementById("question").value = "";
  displayQuestions();
}

function displayQuestions(filteredCategory = "All") {
  let list = document.getElementById("questionsList");
  list.innerHTML = "";

  questions.forEach((q, index) => {

    if (filteredCategory !== "All" && q.category !== filteredCategory) {
      return;
    }

    let div = document.createElement("div");
    div.classList.add("question-card");

    let answersHTML = "";

    q.answers.forEach(ans => {
      answersHTML += `
        <p class="answer">
          <strong>${ans.user}</strong>: ${ans.text}
        </p>
      `;
    });

    div.innerHTML = `
      <p><strong>Asked by:</strong> ${q.user}</p>
      <p><strong>Category:</strong> ${q.category}</p>
      <p><strong>Status:</strong> ${q.status}</p>
      <p>${q.question}</p>

      ${answersHTML}

      <input type="text" id="answerUser-${index}" placeholder="Your Name">
      <br><br>
      <textarea id="answerText-${index}" placeholder="Write your answer"></textarea>
      <br><br>

      <button onclick="addAnswer(${index})">Submit Answer</button>
      <button onclick="deleteQuestion(${index})" style="background-color:red;">Delete</button>
      <hr>
    `;

    list.appendChild(div);
  });
}

function addAnswer(index) {
  let user = document.getElementById(`answerUser-${index}`).value;
  let text = document.getElementById(`answerText-${index}`).value;

  if (user.trim() === "" || text.trim() === "") {
    alert("Please enter your name and answer");
    return;
  }

  questions[index].answers.push({
    user: user,
    text: text
  });

  questions[index].status = "Answered";

  localStorage.setItem("questions", JSON.stringify(questions));
  displayQuestions();
}

function deleteQuestion(index) {
  let confirmDelete = confirm("Are you sure you want to delete this question?");

  if (confirmDelete) {
    questions.splice(index, 1);
    localStorage.setItem("questions", JSON.stringify(questions));
    displayQuestions();
  }
}

function filterQuestions() {
  let selected = document.getElementById("filterCategory").value;
  displayQuestions(selected);
}

displayQuestions();
