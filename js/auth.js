function register(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

auth.createUserWithEmailAndPassword(email,pass)

.then(()=>{

alert("Account created")

window.location="dashboard.html"

})

.catch(e=>alert(e.message))

}

function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

auth.signInWithEmailAndPassword(email,pass)

.then(()=>{

window.location="dashboard.html"

})

.catch(e=>alert(e.message))

}