// allowance  Computation Validation
setTimeout(() => {   
    var allowrate= document.querySelector("#txt_allowrate").value;
    var allowqty =document.querySelector("#txt_allowqty").value;
  
    // AUTOMATED CALCULATION 
    // NOW THEY MULTIPLY PROPLERLY, NOT CONCATENATE
      var result = parseFloat(allowrate).toFixed(2) * parseFloat(allowqty).toFixed(2);
    
         Intresult = parseFloat(result).toFixed(2);

  
      setTimeout(() => {   
        let  allowamount = document.querySelector("#txt_allowamount").value;
        AmountResult= parseFloat(allowamount).toFixed(2);
  
                    setTimeout(() => { 
                     
                      ((AmountResult) === Intresult) ? alert('Matching Value!') : alert('Value do not match'); 
                         
                          
                      allowamount = allowamount;
                             localStorage.setItem("allowamount", allowamount);
                  
                    }, 2000);
      }, 2000);
  
  }, 2000);
