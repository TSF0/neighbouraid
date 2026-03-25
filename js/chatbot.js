async function sendChat(){

let input=document.getElementById("chatInput").value;

const response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"gpt-3.5-turbo",

messages:[
{role:"system",content:"You are NeighbourAid assistant."},
{role:"user",content:input}
]

})

});

const data=await response.json();

alert(data.choices[0].message.content);

}