
let second =document.getElementById("second"),
    minute = document.getElementById("minute"),
    hour = document.getElementById("hour"),
    setting = document.getElementById("setting"),
    sMinute = document.getElementById("s-minute"),
    sButton = document.getElementById("s-button");




// get Data Now And Return In O'oclock
let fullDate = new Date()
let s = fullDate.getSeconds()*6;
let m = fullDate.getMinutes()*6 + s/60;
let h = fullDate.getHours()*30 + m/12;

secondFun()
minuteFun()
hourFun()

function secondFun(){
    s += 6;
    second.style.transform = `rotate(${s}deg)`
}
function minuteFun(){

    m += 1;

    minute.style.transform = `rotate(${m}deg)`;
}
function hourFun(){
    h += 1;

    hour.style.transform = `rotate(${h}deg)`
}


// Repeat The Function After Part Time
setInterval(secondFun , 1000)
setInterval(minuteFun , 10000)
setInterval(hourFun , 1000/5*600)

// Reset s,h,m After +360deg
setInterval(function(){
    s = 0;
},60000)

setInterval(function(){
    m = 0 ;
    h = 0;
    
},1000*24*60*60)

// Set Data And setting
 sButton.onclick = function set(){
    
     if(+sMinute.value > -1 && +sMinute.value < 60 && sMinute.value !== ""){
         m = +sMinute.value*6 + s/60;
         minute.style.transform = `rotate(${m}deg)`;
         
        }
        if(+setting.value > 0 && +setting.value < 13 && setting.value !== ""){
            h = +setting.value*30 + m/12 ;
        hour.style.transform = `rotate(${h}deg)`;
        
    }
    sMinute.value ="";
    setting.value = "";
}