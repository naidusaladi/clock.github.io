const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minute");
const secondsE1=document.getElementById("seconds");
const ampmE1=document.getElementById("ampm");
console.log(minuteE1)
function updateClock(){
    let  our = new Date().getHours();
    let min= new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";
    console.log(our)

    if (our>12){
        our=our-12;
        ampm="PM";

    }
    hourE1.innerText=our;
    minuteE1.innerText=min;
    secondsE1.innerText=sec;
    ampmE1.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock();
