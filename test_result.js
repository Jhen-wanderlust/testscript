// run Manualy on console Log for test Percentage: 
                                
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


                              window.alert("Total Executed Steps: "+ intTotal + "   Passed :  "+ Intperpassed+" % " + "  Failed : "+ Intperfailed+" % " + " Healed By TP : "+ Intperhealed+" % ");


                                

                   


                    
                    
