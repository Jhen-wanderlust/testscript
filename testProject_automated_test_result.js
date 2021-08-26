var passed = document.querySelectorAll(".execution-result.passed").length; // for passed
var failed = document.querySelectorAll(".execution-result.failed").length; // for failed
var  healed = document.querySelectorAll(".execution-result.warning").length;
//This step was self-healed by TestProject's AI. We'll keep looking for ways to speed up your executions. 
// time elapsed in js with loading page

var intPassed = Number(passed);
var intFailed = Number(failed);
var intHealed = Number(healed);
var Total_Steps =  intPassed + intFailed +intHealed;
var intTotal = Number(Total_Steps);
console.log(intTotal);
//Percentage formula = (Value/Total value)×100.

var PerPassed = intPassed/Total_Steps * 100;
var Intperpassed = Math.abs(PerPassed);
console.log(Intperpassed);

var PerFailed = intFailed/Total_Steps * 100;
var Intperfailed = Math.abs(PerFailed);
console.log(Intperfailed);


var PerHealed = intHealed/Total_Steps * 100;
var Intperhealed = Math.abs(PerHealed);
console.log(Intperhealed);






// for all needs 


// Show all results


localStorage.getItem("today", today);
document.write('Date :' + today+"     " + " | "); 

localStorage.getItem("time_resul", time_resul);
document.write("Time Started : " + time_result+"     " + " | ");  

document.write("Execution Time : "+ "  "+value1 + "hr :" + value2 + "mins :" + value3 + "sec");



document.write(" Total Executed Steps "+ intTotal);


//Percentage formula = (Value/Total value)×100.

document.write(" Passed"+ Intperpassed+"%");

document.write(" Failed "+ Intperfailed+"%");

document.write(" Healed By TP "+ Intperhealed+"%");




// For TP // get current date
let today = new Date().toLocaleDateString()
today = today;
localStorage.setItem("today", today);


// for TP : get time in 12 hr format
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
var time_result = formatAMPM(new Date);
time_result = time_result;
localStorage.setItem("time_result", time_result);



// Execution Time
//start time
var dt = new Date();
var ht= dt.getHours(); 
ht = ht;
localStorage.setItem("ht", ht);
 


var dt = new Date();
var mt= dt.getMinutes(); 
mt = mt;
localStorage.setItem("mt", mt);

var dt = new Date();
var st= dt.getSeconds(); 
st = st;
localStorage.setItem("st", st);


// for TP end


var dt = new Date();
var eht= dt.getHours(); 
eht = eht;


var dt = new Date();
var emt= dt.getMinutes(); 
emt = emt;


var dt = new Date();
var est= dt.getSeconds(); 
est = est;




localStorage.getItem("ht", ht);
localStorage.getItem("st", st);
localStorage.getItem("mt", mt);
var thours = ht - eht;

var tmins = mt - emt;

var tsec = st - est;



var value1 = Math.abs(thours);

var value2 = Math.abs(tmins);

var value3 = Math.abs(tsec);







// for all needs 


// Show all results


localStorage.getItem("today", today);
document.write('Date :' + today+"     " + " | "); 

localStorage.getItem("time_resul", time_resul);
document.write("Time Started : " + time_result+"     " + " | ");  

document.write("Execution Time : "+ "  "+value1 + "hr :" + value2 + "mins :" + value3 + "sec");



document.write(" Total Executed Steps "+ intTotal);


//Percentage formula = (Value/Total value)×100.

document.write(" Passed"+ Intperpassed+"%");

document.write(" Failed "+ Intperfailed+"%");

document.write(" Healed By TP "+ Intperhealed+"%");








// today// get current date
let today = new Date().toLocaleDateString()
today = today;
localStorage.setItem("today", today);


console.log(today)



//get time in 12 hr format
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
var time_result = formatAMPM(new Date);
time_result = time_result;
localStorage.setItem("time_result", time_result);


console.log(time_result);

// Execution Time
//start time
var dt = new Date();
var ht= dt.getHours(); 
ht = ht;
localStorage.setItem("ht", ht);

console.log(ht);

var dt = new Date();
var mt= dt.getMinutes(); 
mt = mt;
localStorage.setItem("mt", mt);

console.log(mt);


var dt = new Date();
var st= dt.getSeconds(); 
st = st;
localStorage.setItem("st", st);

console.log(st);




//end 

var dt = new Date();
var eht= dt.getHours(); 
eht = eht;
localStorage.getItem("ht", ht);

console.log(eht);

var dt = new Date();
var emt= dt.getMinutes(); 
emt = emt;
localStorage.getItem("mt", mt);

console.log(emt);


var dt = new Date();
var est= dt.getSeconds(); 
est = est;
localStorage.getItem("st", st);

console.log(est);

// time computation 

// for console 
var thours = ht - eht;
console.log(thours);
var tmins = mt - emt;
console.log(tmins);
var tsec = st - est;
console.log(tsec);

//returns the absolute value of a number.
var value1 = Math.abs(thours);
console.log(value1);
var value2 = Math.abs(tmins);
console.log(value2);
var value3 = Math.abs(tsec);
console.log(value3);

console.log("Execution Time:"+ " "+value1 + ":" + value2 + ":" + value3);



// Show all results


   localStorage.getItem("today", today);
   document.write('Date :' + today+"     " + " | "); 

   localStorage.getItem("time_result", time_resul);
   document.write("Time Started : " + time_result+"     " + " | ");  

   document.write("Execution Time : "+ "  "+value1 + "hr :" + value2 + "mins :" + value3 + "sec");
 
   


// useless
var start = Date.now();
start = start;
localStorage.getItem("start", start);


// task starts
for (var i = 0; i < 1000;i++);
// task ends
 
var end = Date.now();
end = end;
let start = localStorage.getItem("start"); 
console.log(`Execution time: ${end - start} ms`);



