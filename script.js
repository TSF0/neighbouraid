let questions = JSON.parse(localStorage.getItem("questions")) || [];
let generatedOTP = "";

// Send OTP
function sendOTP() {
  let input = document.getElementById("userInput").value;

  if (!input) return alert("Enter email or phone");

  generatedOTP = Math.floor(1000 + Math.random() * 9000);
  alert("Demo OTP: " + generatedOTP);

  document.getElementById("otpSection").style.display = "block";
}

// Verify OTP
function verifyOTP() {
  let otp = document.getElementById("otpInput").value;

  if (otp == generatedOTP) {
    let user = document.getElementById("userInput").value;

    localStorage.setItem("user", user);

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    document.getElementById("usernameDisplay").innerText = user;
  } else {
    alert("Invalid OTP");
  }
}

// Auto login
window.onload = () => {
  let user = localStorage.getItem("user");

  if (user) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    document.getElementById("usernameDisplay").innerText = user;
  }

  displayQuestions();
};

// Post question
function postQuestion() {
  let name = document.getElementById("username").value;
  let category = document.getElementById("category").value;
  let text = document.getElementById("question").value;

  if (!name || !text) return alert("Fill all fields");

  questions.push({ name, category, text });

  localStorage.setItem("questions", JSON.stringify(questions));
  displayQuestions();
}

// Show questions
function displayQuestions() {
  let list = document.getElementById("questionsList");
  list.innerHTML = "";

  questions.forEach(q => {
    list.innerHTML += `
      <div class="question-card">
        <b>${q.name}</b> (${q.category})<br>
        ${q.text}
      </div>
    `;
  });
}