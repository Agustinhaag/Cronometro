let hr = min = sec = ms = "0" + 0; 
let starttimer;
let startbtn= document.getElementById("start"),
    stopbtn = document.getElementById("stop"),
    resetbtn = document.getElementById("reset");

startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click",reset);

function start(){
  starttimer = setInterval(()=>{
   ms++;
   ms= ms<10 ? "0" + ms : ms;

   if (ms==100){
    sec++;
    sec = sec<10 ? "0" + sec : sec;
    ms=0 + 0; //esto es para que solo sean dos num al contar sino cuenta y no para en 100
   }
   if(sec==60){
    min ++;
   min = min<10 ? "0" + min : min;
   sec= 0+0;
   }
   if(min==60){
    hr ++;
    hr= hr<10 ? "0" + hr : hr;
   min= 0 + 0;
   }

   value();
  },10)
}


function stop(){
   clearInterval(starttimer);
}

function reset(){
  clearInterval(starttimer);
  hr= min = sec = ms = "0" + 0;
  value();
}
 
function value(){
  document.getElementById("milisegundo").innerHTML= ms;
  document.getElementById("segundo").innerHTML= sec;
  document.getElementById("minuto").innerHTML= min;
  document.getElementById("hora").innerHTML= hr;
}