function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(pos=>{

localStorage.setItem("lat",pos.coords.latitude);
localStorage.setItem("lng",pos.coords.longitude);

});

}

}

window.onload=getLocation;