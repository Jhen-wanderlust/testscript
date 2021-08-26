
// Execution Time
//start time
 // execute js 1 before login in
var dt = new Date();
var ht= dt.getHours(); 
ht = ht;
localStorage.setItem("ht", ht.toString()); //stored as strings

console.log( 'Hours :' + ht);

var dt = new Date();
var mt= dt.getMinutes(); 
mt = mt;
localStorage.setItem("mt", mt.toString());

console.log('Minutes :' + mt);


var dt = new Date();
var st= dt.getSeconds(); 
st = st;
localStorage.setItem("st", st.toString());

console.log('Seconds :' + st);


// for date and time



// today// get current date
var today = new Date().toLocaleDateString()
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





// for end execution 
 //execute js 2 -- Pause for "10000" ms -- get alert text -- accept alert 

                    //end 

                    var dt = new Date();
                    var eht= dt.getHours(); 
                    eht = eht;
                    var ht = Number(localStorage.getItem("ht"));
               

                    console.log(eht);

                    var dt = new Date();
                    var emt= dt.getMinutes(); 
                    emt = emt;
                    var mt = Number(localStorage.getItem("mt"));

                    console.log(emt);


                    var dt = new Date();
                    var est= dt.getSeconds(); 
                    est = est;
                    var st = Number(localStorage.getItem("st"));
                 

                    console.log(est);

                    // time computation 

                    // for console 
                    var thours = eht - ht;
                    console.log(thours);
                    
                    var tmins = emt - mt;
                    console.log(tmins);

                    var tsec = est - st;
                    console.log(tsec);

                    //returns the absolute value of a number.
                    var value1 = Math.abs(thours);
                    console.log(value1);
                    var value2 = Math.abs(tmins);
                    console.log(value2);
                    var value3 = Math.abs(tsec);
                    console.log(value3);

                    console.log("Execution Time:"+ " "+value1 + ":" + value2 + ":" + value3);

                    // TEST RESULT
                    
                            var today = localStorage.getItem("today", today);
                            console.log('Date :'+ "  " + today); 

                            var time_result = localStorage.getItem("time_result",time_result);
                            console.log("Time Started : " + "  "+ time_result);  

                            console.log("Execution Time : "+ "  "+ value1 + " hr : " + value2 + " mins : " + value3 + " sec");
                            var today = localStorage.getItem("today", today);
                            var time_result = localStorage.getItem("time_result",time_result);
                            window.alert( 'Date :'+ "  " + today+ "   Time Started : " + "  "+ time_result + "                                             Execution Time : "+ "  "+ value1 + " hr : " + value2 + " mins : " + value3 + " sec"); 


                    // for percentage 

                    //execute js 3 on very last step
                    var win = window.open("https://app.testproject.io/ext/embedded/");

                                // run Manualy on console Log: 
                                
                                var passed = document.querySelectorAll(".execution-result.passed").length; // for passed
                                var failed = document.querySelectorAll(".execution-result.failed").length; // for failed
                                var  healed = document.querySelectorAll(".execution-result.warning").length;

                                var intPassed = Number(passed);
                                var intFailed = Number(failed);
                                var intHealed = Number(healed);
                                var Total_Steps =  intPassed + intFailed +intHealed;
                                var intTotal = Number(Total_Steps);
                                console.log(" Total Executed Steps:  "+ intTotal);
                                //Percentage formula = (Value/Total value)×100.

                                var PerPassed = intPassed/Total_Steps * 100;
                                var Intperpassed = parseFloat(PerPassed).toFixed(0);
                                console.log(" Passed: "+ Intperpassed+ " % ");

                                var PerFailed = intFailed/Total_Steps * 100;
                                var Intperfailed = parseFloat(PerFailed).toFixed(0);
                                console.log(" Failed: "+ Intperfailed+ " % ");


                                var PerHealed = intHealed/Total_Steps * 100;
                                var Intperhealed = parseFloat(PerHealed).toFixed(0);
                                console.log(" Healed By TP: "+ Intperhealed+ " % ");


                                // TEST RESULT 
                                //Percentage formula = (Value/Total value)×100.


                                window.alert("Total Executed Steps: "+ intTotal + "   Passed :  "+ Intperpassed+" % " + "  Failed : "+ Intperfailed+" % " + "                             Healed By TP : "+ Intperhealed+" % ");


                                

                   


                    
                    
