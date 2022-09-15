// history class test
var dest = new Date("sep 19, 2022").getTime();
var x = setInterval(function() { 
var now = new Date().getTime();

var diff = dest - now;

var days = Math.floor(diff / (1000*60*60*24));
console.log(days);
var hour = Math.floor((diff % (1000*60*60*24))/(1000 * 60 * 60));
console.log(hour);
var minutes = Math.floor((diff % (1000 * 60 * 60))/(1000 * 60));
console.log(minutes);
var seconds = Math.floor((diff % (1000*60))/1000);
console.log(seconds);

document.getElementById("histCT").innerHTML = days+"d, "+hour+"h : "+minutes +"m : "+seconds+"s"
}, 1000);

// history assignment
var dest2 = new Date("sep 18, 2022").getTime();
var x2 = setInterval(function() { 
var now2 = new Date().getTime();

var diff2 = dest2 - now2;

var days2 = Math.floor(diff2 / (1000*60*60*24));
console.log(days2);
var hour2 = Math.floor((diff2 % (1000*60*60*24))/(1000 * 60 * 60));
console.log(hour2);
var minutes2 = Math.floor((diff2 % (1000 * 60 * 60))/(1000 * 60));
console.log(minutes2);
var seconds2 = Math.floor((diff2 % (1000*60))/1000);
console.log(seconds2);

document.getElementById("histAss").innerHTML = days2+"d, "+hour2+"h : "+minutes2 +"m : "+seconds2+"s"
}, 1000);
