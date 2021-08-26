//  this is the code to check if its incrementing or not ok?.. yes thank u for the help :) .. noted

// Firstly save the initial value integer of that textbox ( if page is refreshing this process then need to use localStorage )
 let initialLength = document.querySelector('#txt_info_docnum').value;
     initialLength = initialLength.split("-"); // this is to split the alphabet? yes to get only number the delimeter is - so i suplitted using -.. okay i will try on other button.
     initialLength = initialLength[1];//why there is [1]
     incrementedResults = parseInt(initialLength) + 1; // so if i have used here the parseInt the 00045 for example became 45
// Saving in localstorage so you can access it also after page refresh / redirect
     localStorage.setItem("incrementedResults", incrementedResults);


// Run you code to do other stuff like next and add so the value will increment
// here put your code to add and save and after that 


// this code to check if incremented or not ok?


// got the algorithm na? first learn that code to save the value then run code to do all like inserting new recond and in the end run this last code to check 

// After this check again the value integer of textbox and compair

// Yes, na use some brain. omg let it be

let currentLength = document.querySelector('#txt_info_docnum').value;
    currentLength = currentLength.split("-");
    
    currentLength = currentLength[1];
    let incrementedResults = localStorage.getItem("incrementedResults");
    
// You can aslo write this condition gracefully using ternary operators    
   (parseInt(currentLength) == incrementedResults) ? alert('Incrementing Successfully') : alert('Not Incrementing Successfully');  

/*******************
//compare two values from other page in js
********************/

//sales
	
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmsalact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtsalactcde").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
// sales return
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmsrtact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtsrtactcde").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
//purchases
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmpuract").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtpuractcde").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
// Purchase return
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmprtact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtprtactcde").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
//cgs

let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmcgsact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtcgsactcde").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  

//Inventory
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itminvact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtinvactcde").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  

//sales disc 
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmsaldisact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtsaldisact").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
//Purchase disc
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmpurdisact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtpurdisact").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  


//VAT CODE
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmpurdisact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.getElementById("txtpurdisact").value;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) == GL_Value) ? alert('Matching Value!') : alert('Value do not match');  
 

//PUR VAT  .htAutocompleteArrow[0]

let GL_Value = document.querySelectorAll("htAutocompleteArrow")[0].value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

//Pur-caps goods .htAutocomplete[0]

let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmpurdisact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);
//Vat 0-rated   .htAutocomplete[1]
let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmpurdisact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);
// vat exempt .htAutocomplete current highlight[0]

let GL_Value = document.getElementById("itm_tb2_inpt_glstp_itmpurdisact").value; 
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

// view validation

let tableCellValue = document.querySelector("#loansdesc").innerText; //for table cell #-id

setTimeout(() => 
  {
    document.querySelector('#inquire_btn').click();  // for view button
    
    setTimeout(() => 
      { 
          let viewFile = document.querySelector("#txtdesc").value; // for comparing data (inside the view modal)
          ((viewFile) == tableCellValue) ? 
                alert('Matching Value!') : 
              alert('Value do not match'); 
      },5000)        

  },1000)

  

      