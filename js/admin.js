const list=document.getElementById("questions")

db.collection("questions")

.orderBy("time","desc")

.onSnapshot(snapshot=>{

let html=""

snapshot.forEach(doc=>{

let data=doc.data()

html+=`

<div class="question">

<p>${data.text}</p>

<button onclick="deleteQuestion('${doc.id}')">

Delete

</button>

</div>

`

})

list.innerHTML=html

})

function deleteQuestion(id){

db.collection("questions").doc(id).delete()

}