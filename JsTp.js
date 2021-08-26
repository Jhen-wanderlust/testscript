//cancel tracc

    var index = 4
    var find_element = false;
    while (find_element == false){
        if(document.querySelectorAll(".searchable_modalbtnfilterer.save").innerText = "Search");
        {
            find_element = true;    
        }
            document.querySelectorAll(".searchable_modalbtnfilterer.save")[index].innerText ;
            index++;
    }
    if(find_element){
        document.querySelectorAll('.searchable_modalbtnfilterer.save')[index-1].click();
    }
//DELETE AUTOMATICALLY IF DELETE BUTTON IS PRESENT.

document.querySelector('#delete_btn').click();

setTimeout(() => {
    document.querySelectorAll('.ajs-button')[0].click();

            setTimeout(() => {
                document.querySelectorAll('.ajs-button.print')[1].click();
            }
            ,3000);

        }
        ,3000);

            
            document.querySelector('#delete_btn').click();

                setTimeout(() => {
                    document.querySelectorAll('.ajs-button')[0].click();
    
                            setTimeout(() => {
                                document.querySelectorAll('.ajs-button.print')[1].click();
                            }
                            ,3000);

                        }
                        ,3000);

                            document.querySelector('#delete_btn').click();

                            setTimeout(() => {
                                document.querySelectorAll('.ajs-button')[0].click();
                
                                        setTimeout(() => {
                                            document.querySelectorAll('.ajs-button.print')[1].click();
                                        }
                                        ,3000);
                                    }
                                    ,3000);
                                    
    var s = document.querySelector('#delete_btn').click();
setTimeout(() => {
        if(s){
            s.click();

            setTimeout(() => {
                document.querySelectorAll('.ajs-button')[0].click();

                        setTimeout(() => {
                            document.querySelectorAll('.ajs-button.print')[1].click();
                        }
                        ,3000);

                       
            }
            ,3000);

        

        }else{
            document.querySelector('#add_btn').click();
        }


}
,3000);



//

var index = 0
var find_element = false;
while (find_element == false){
    if(document.querySelectorAll(".filter_select.edit").value = "BDO-SA-2265");
    {
        find_element = true;    
    }
        document.querySelectorAll(".filter_select.edit")[index].value ;
        index++;
}
if(find_element){
    document.querySelectorAll('.filter_select.edit')[index-1].click();
}

//close tracc
document.querySelectorAll(".ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only")[2].click();

var dateToday = document.querySelectorAll("#txt_chkdte").value = "07-19-2021";

if (dateToday) {

    alert("")
}


var index = 2
var find_element = false;
while (find_element == false){
    if(document.querySelectorAll(".filter_select.edit").value = "BPI-CA-1969");
    {
        find_element = true;    
    }
        document.querySelectorAll(".filter_select.edit")[index].value ;
        index++;
}
if(find_element){
    document.querySelectorAll('.filter_select.edit')[index-1].click();
}


//get dATE TODAY    
let today = new Date().toLocaleDateString()
today = today;

Intresult = parseFloat(result).toFixed(2);

var dotext = document.querySelector("#txt_trndte").value;
((dotext) === today) ? alert('Matching Value!') : alert('Value do not match');  



var index = 1
var find_element = false;
while (find_element == false){
    if(document.querySelectorAll(".searchable_modalbtnfilterer.save").innerText = "Search");
    {
        find_element = true;    
    }
        document.querySelectorAll(".searchable_modalbtnfilterer.save")[index].innerText ;
        index++;
}
if(find_element){
    document.querySelectorAll('.searchable_modalbtnfilterer.save')[index-1].click();
}


var index = 0
var find_element = false;
while (find_element == false){
    if(document.querySelectorAll(".save").value == "ADD NEW UNIT OF MEASURE");
    {
        find_element = true;    
    }
        document.querySelectorAll(".save")[index].value;
        index++;
}
if(find_element){
    document.querySelectorAll('.save')[index-1].click();
}






var GL_Value = document.querySelectorAll("#cbo_taxclass")[67].value;
GL_Value = GL_Value;
localStorage.setItem("GL_Value", GL_Value);

let  Master_file = document.querySelector("#taxclass").innerText;
Master_file = Master_file;
let GL_Value = localStorage.getItem("GL_Value"); 
((Master_file) === GL_Value) ? alert('Matching Value!') : alert('Value do not match');  



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



// allowance  Computation Validation
setTimeout(() => {   
    var allowrate= document.querySelector("#txt_allowrate").value;
    var allowqty =document.querySelector("#txt_allowqty").value;
  
    // (B) SUB 
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

  //CODE AFTER SAVING SA ALLOWANCE SA MAY EMPLOYEE ENTRY
  let SavedAmount= document.querySelectorAll(".contentpanel")[3].innerHTML;
              
            SavedAmount = SavedAmount;
              let allowamount = localStorage.getItem("allowamount"); 
              ((SavedAmount) === allowamount) ? alert('Matching Value!') : alert('Value do not match');  
 
//Purchases
var warehouse = document.querySelector("#txt_info_warcde").value;
warehouse = warehouse;
localStorage.setItem("warehouse", warehouse);
              
let  purch_warehouse = document.querySelector("#txtwarehouse").value;
purch_warehouse = purch_warehouse;
let warehouse = localStorage.getItem("warehouse"); 
((purch_warehouse) === warehouse) ? alert('Matching Value!') : alert('Value do not match');  
              
purch_warehouse = document.querySelector("#txtwarehouse").value;

if (purch_warehouse){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}

var index = 0
var find_element = false;
while (find_element == false){
    if(document.querySelectorAll('.searchable_modalbtnfilterer.save')[index].innerText == "Search"){
        find_element = true;    
    }
        document.querySelectorAll('.searchable_modalbtnfilterer.save')[index].innerText;
        index++;
}
if(find_element){
    document.querySelectorAll('.searchable_modalbtnfilterer.save')[index-1].click();
}

var cust_Value = document.querySelector("#txtsupdsc").value;
cust_Value = cust_Value;
localStorage.setItem("cust_Value", cust_Value);

let  Master_file = document.querySelector("#txtsupdsc").innerText;
Master_file = Master_file;
let cust_Value = localStorage.getItem("cust_Value"); 
((Master_file) === cust_Value) ? alert('Matching Value!') : alert('Value do not match');  

setTimeout(() => 

{ 

    document.querySelector('#btn_diag_save').click();
    setTimeout(() => 

             {

               document.querySelector('.ajs-button.print').click();
               localStorage.setItem("getRandom", parseInt(getRand) + 1);
                       if (val1 === val1) // for existing data
                       setTimeout(() =>   {
                         document.querySelector("#btn_diag_close").click();
                       },2000)
             },2000)

},2000)


var array = [0, 1];
document.querySelectorAll(".ajs-content li")[index].style.color = array;
array++;

document.querySelector('#txtcusadd1').style.color = 'red';


document.getElementById('txtcusadd1').style.backgroundColor = 'yellow' ; 


var index = 0
var find_element = false;
while (find_element == false){
    if(document.querySelectorAll(".ajs-content li")[index].innerText == "CASH IN"){
        find_element = true;    
    }
    document.querySelectorAll(".ajs-content li")[index].innerText;
        index++;
}
if(find_element){
    document.querySelectorAll(".ajs-content li")[index-1].click();
}

//sales
var warehouse = document.querySelector("#txtwarehouse").value;
warehouse = warehouse;
localStorage.setItem("warehouse", warehouse);
              
let  sales_warehouse = document.querySelector("#txtwarehouse").value;
sales_warehouse = sales_warehouse;
let warehouse = localStorage.getItem("warehouse"); 
((sales_warehouse) === warehouse) ? alert('Matching Value!') : alert('Value do not match');  
              
//txtewt

var txtewt = document.querySelector("#txtewt").value;
txtewt = txtewt;
localStorage.setItem("txtewt", txtewt);
              
let  sales_txtewt = document.querySelector("#txtewt").value;
sales_txtewt = sales_txtewt;
let txtewt = localStorage.getItem("txtewt"); 
((sales_txtewt) === txtewt) ? alert('Matching Value!') : alert('Value do not match'); 

ewt = document.querySelector("#txtewt").value;

if (ewt){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}


//txtevat

var txtevat = document.querySelector("#txtevat").value;
txtevat = txtevat;
localStorage.setItem("txtevat", txtevat);
              
let  sales_txtevat = document.querySelector("#txtevat").value;
sales_txtevat = sales_txtevat;
let txtevat = localStorage.getItem("txtevat"); 
((sales_txtevat) === txtevat) ? alert('Matching Value!') : alert('Value do not match'); 

txtevat = document.querySelector("#txtevat").value;

if (txtevat){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}

//scroll left 


let currentScroll = document.querySelector('.vScrollTable').scrollLeft;

document.querySelector('.vScrollTable').scrollLeft = currentScroll + 900;



document.querySelectorAll('.wtHolder')[12].scrollIntoView({ behavior: 'smooth', block: 'end' });



// for search 

var txt_info_docnum = document.querySelector("#txt_info_docnum").value;
txt_info_docnum = txt_info_docnum;
localStorage.setItem("txt_info_docnum", txt_info_docnum);


let docnum = localStorage.getItem("txt_info_docnum"); 
document.querySelector("#txt_pager_qsearch").value = docnum;


//txtremarks


var txtremarks = document.querySelector("#txtremarks").value;
txtremarks = txtremarks;
localStorage.setItem("txtremarks", txtremarks);
              
let  sales_txtremarks = document.querySelector("#txtremarks").value;
sales_txtremarks = ales_txtremarks;
let txtremarks = localStorage.getItem("txtremarks"); 
((sales_txtremarks) === txtremarks) ? alert('Matching Value!') : alert('Value do not match'); 

txtremarks = document.querySelector("#txtremarks").value;

if (txtremarks){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}


//txtpreby

var txtpreby = document.querySelector("#txtpreby").value;
txtpreby = txtpreby;
localStorage.setItem("txtpreby", txtpreby);
              
let  sales_txtpreby = document.querySelector("#txtpreby").value;
sales_txtpreby = sales_txtpreby;
let txtpreby = localStorage.getItem("txtpreby"); 
((sales_txtpreby) === txtpreby) ? alert('Matching Value!') : alert('Value do not match'); 

txtremarks = document.querySelector("#txtpreby").value;

if (txtpreby){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}

//txtchkby 

var txtchkby = document.querySelector("#txtchkby").value;
txtchkby = txtchkby;
localStorage.setItem("txtchkby", txtchkby);
              
let  sales_txtchkby = document.querySelector("#txtchkby").value;
sales_txtchkby = sales_txtchkby;
let txtptxtchkbyreby = localStorage.getItem("txtchkby"); 
((sales_txtchkby) === txtchkby) ? alert('Matching Value!') : alert('Value do not match'); 

txtremarks = document.querySelector("#txtchkby").value;

if (txtchkby){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}

//txtapvby 

var txtapvby  = document.querySelector("#txtapvby").value;
txtapvby  = txtapvby ;
localStorage.setItem("txtapvby", txtapvby );
              
let  sales_txtapvby  = document.querySelector("#txtpreby").value;
sales_txtapvby = sales_txtapvby;
let txtapvby = localStorage.getItem("txtapvby"); 
((sales_txtapvby) === txtpreby) ? alert('Matching Value!') : alert('Value do not match'); 

txtremarks = document.querySelector("#txtpreby").value;

if (sales_txtapvby){

    alert("Data Reflected");
}else{

    alert("No Data Reflected");
}

field = document.querySelectorAll(".drsElement label")[0].innerText;
if(field){


    alert("text[field] is validated")
}else 
{

    alert("text[field] is not validated") 
}




// insert checking on edit page Inventory check selected warehouse

let  edit_page = document.querySelector("#txt_warcde1").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 




let  edit_page = document.querySelector("#txt_warcde2").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde3").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde4").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde5").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde6").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde7").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde8").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde9").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



let  edit_page = document.querySelector("#txt_warcde10").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 



var warehouse_Value = document.querySelectorAll("#txt_info_warcde").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

let  edit_page = document.querySelector("#txt_warcde10").value;
edit_page = edit_page;
let warehouse_Value = localStorage.getItem("warehouse_Value"); 
((edit_page) === warehouse_Value) ? alert('Matching Value!') : alert('Value do not match'); 

// insert upon adding warehouse
var warehouse_Value = document.querySelectorAll("#txt_warcde1").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

var warehouse_Value = document.querySelectorAll("#txt_warcde2").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

var warehouse_Value = document.querySelectorAll("#txt_warcde3").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

var warehouse_Value = document.querySelectorAll("#txt_warcde4").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

var warehouse_Value = document.querySelectorAll("#txt_warcde5").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);


var warehouse_Value = document.querySelectorAll("#txt_warcde6").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);


var warehouse_Value = document.querySelectorAll("#txt_warcde7").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

var warehouse_Value = document.querySelectorAll("#txt_warcde8").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);


var warehouse_Value = document.querySelectorAll("#txt_warcde9").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);

var warehouse_Value = document.querySelectorAll("#txt_warcde10").value;
warehouse_Value = warehouse_Value;
localStorage.setItem("warehouse_Value", warehouse_Value);


var r = document.querySelector("#txtuntprc1").hasAttribute ="readonly";
if (r){
 alert("yes");

}else{

    alert("no");
}



document.querySelector("#chk_dirpay").checked = true;












var balance1 = document.querySelector("#txt_netvatamtfor1").value; //9 
var balance2 = document.querySelector("#txt_netvatamtfor2").value; //1,999.80 
var amount = document.querySelector("#txtsal_amt").value;//576


var tot_bal = Number(amount) - Number(balance1);
var value1 = Math.abs(tot_bal); //tot_bal
var amtApplied1 = Number(amount) - Number(value1); //amount_applied1 9
amtApplied1 = amtApplied1;
localStorage.setItem("amtApplied1", amtApplied1);

var final_balance1= Number(balance1) - Number(amtApplied1);
final_balance1 = final_balance1;
localStorage.setItem("final_balance1", final_balance1); //0

var final_balance2 = Number(value1) -  Number(balance2);
final_balance2= final_balance2;
localStorage.setItem("final_balance2", final_balance2);//1,432.8


var value2 =  Number(balance2) - Number(final_balance2); // 567
var amtApplied2 = Math.abs(value2);
amtApplied2 = amtApplied2;
localStorage.setItem("amtApplied2", amtApplied2);

//fire after the page load
var balance1 = document.querySelector("#txt_netvatamtfor1").value; //9 
var balance2 = document.querySelector("#txt_netvatamtfor2").value; //1,999.80 
var amount = document.querySelector("#txtsal_amt").value;//576
var amount_applied2 = document.querySelector("#txt_amtapp2").value;
var amount_applied1 = document.querySelector("#txt_amtapp1").value;


let final_balance1 = final_balance1.getItem("final_balance1"); 
((final_balance1) === balance1) ? alert('Matching Value!') : alert('Value do not match'); 

let final_balance2 = final_balance1.getItem("final_balance2"); 
((final_balance2) === balance2) ? alert('Matching Value!') : alert('Value do not match'); 


let amtApplied1 = final_balance1.getItem("amtApplied1"); 
((amtApplied1) === amount_applied1) ? alert('Matching Value!') : alert('Value do not match'); 

let amtApplied2 = final_balance1.getItem("amtApplied2"); 
((amtApplied2) === amount_applied2) ? alert('Matching Value!') : alert('Value do not match'); 

/***

sample 2:  if amount > balance1 
amount (txtsal_amt) - balance1(txt_netvatamtfor1) = tot_bal (txt_amtapp2)
576-9 = 567
amount (txtsal_amt)  - tot_bal (txt_amtapp2) = amount_applied1 (txt_amtapp1)
576 - 567 = 9 
balance1(txt_netvatamtfor1)  - amount_applied1 (txt_amtapp1) = final_balance1 (txt_trntot1)
9 - 9 = 0

tot_bal (txt_amtapp2) - balance2 (txt_netvatamtfor2) = final_balance2 (txt_netvatamtfor2)
567 - 1999.80 = 1,432.8
balance2 - final_balance2 = amount_applied2(txt_amtapp2)
1999.80 - 1,432.8 = 567

amount_applied1 + amount_applied2 - amount = final_balance
9+567 = 0 

if amount = 0 then balance is 0***/

/***
sample 2:  if amount < balance1
amount - balance1 = tot_bal 
8-9 = 1
balance1- tot_bal = amount_applied1
9 - 1 = 8 
balance1 - amount_applied1  = final_balance1 
8 - 9 = 1
***/

