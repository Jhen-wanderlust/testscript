setTimeout(() => { //delay per action

    document.querySelector("#lbl_allowance").click();   

            setTimeout(() => { //to get the value of allowance setup dropdown list.

              
                var GL_Value = document.querySelectorAll("#cbo_taxclass")[67].value;
                GL_Value = GL_Value;
                localStorage.setItem("GL_Value", GL_Value);  
                
                        setTimeout(() => { //to get the value of allowance setup dropdown value

                    
                            
                               window.location.href = "https://gd3.lstventures.com/online_test/web_standard_onedb/webapp/payroll/mf_allowance.php";
                        
                                        setTimeout(() => { //to validate if the modified value on Tax computation setup has been applied.

                                                    let  Master_file = document.querySelector("#taxclass").innerText;
                                                    Master_file = Master_file;
                                                    let GL_Value = localStorage.getItem("GL_Value"); 
                                                    ((Master_file) === GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
                                  
                                        }
                                            
                                        ,3000);


                        }
                            
                        ,10000); // it takes more time
                    
            }
                
            ,2000);
    
}
      
,6000);
