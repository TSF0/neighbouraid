function postQuestion(){

let q=document.getElementById("question").value

db.collection("questions").add({

text:q,

time:Date.now()

})

}

db.collection("questions")

.orderBy("time","desc")

.onSnapshot(snapshot=>{

let html=""

snapshot.forEach(doc=>{

let data=doc.data()

html+=`<div class="question">${data.text}</div>`

})

document.getElementById("questions").innerHTML=html

})