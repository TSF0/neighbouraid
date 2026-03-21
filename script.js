let questions = JSON.parse(localStorage.getItem("questions")) || [];
let otp="";

function sendOTP(){

let user=document.getElementById("userInput").value;

if(!user)return alert("Enter email or phone");

otp=Math.floor(1000+Math.random()*9000);

alert("Demo OTP: "+otp);

document.getElementById("otpBox").style.display="block";

}

function verifyOTP(){

let entered=document.getElementById("otpInput").value;

if(entered==otp){

localStorage.setItem("user",document.getElementById("userInput").value);

document.getElementById("loginSection").style.display="none";
document.getElementById("appSection").style.display="block";

}else{
alert("Wrong OTP");
}

}



function postQuestion(){

let name=document.getElementById("username").value;
let cat=document.getElementById("category").value;
let text=document.getElementById("question").value;

if(!name||!text)return alert("Fill fields");

questions.push({name,cat,text});

localStorage.setItem("questions",JSON.stringify(questions));

displayQuestions();

}



function displayQuestions(){

let list=document.getElementById("questionsList");

list.innerHTML="";

questions.forEach(q=>{

list.innerHTML+=`

<div class="question">

<b>${q.name}</b> • ${q.cat}

<p>${q.text}</p>

</div>

`;

});

}

displayQuestions();



function searchQuestions(){

let value=document.getElementById("searchBox").value.toLowerCase();

let list=document.getElementById("questionsList");

list.innerHTML="";

questions.forEach(q=>{

if(q.text.toLowerCase().includes(value)){

list.innerHTML+=`

<div class="question">

<b>${q.name}</b> • ${q.cat}

<p>${q.text}</p>

</div>

`;

}

});

}



function toggleChat(){

let box=document.getElementById("chatBox");

box.style.display=box.style.display=="block"?"none":"block";

}



function sendChat(){

let input=document.getElementById("chatInput");

let msg=input.value;

let chat=document.getElementById("chatMessages");

chat.innerHTML+=`<p><b>You:</b> ${msg}</p>`;

chat.innerHTML+=`<p><b>Bot:</b> Please ask your question in the platform.</p>`;

input.value="";

}



function toggleTheme(){

document.body.classList.toggle("dark");

}