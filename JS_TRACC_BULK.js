// checker if data exist

let listExistngData = [];  // Array In which we'll store existing data of list

document.querySelectorAll('#datatable tr td').forEach((data) => // if td is greater than length 2
   {
      (data.innerText.length > 2) ? listExistngData.push(data.innerText) : false ;  
   })  

listExistngData.forEach((data) => 
   {
   
             listData.includes(data) ? console.log(`${data} Is already in List`) : console.log(`${data} Is not in List`);
   })



//Brand Random Words from API



// brand

let listData = '';
fetch("https://random-words5.p.rapidapi.com/getMultipleRandom?count=5", 
  {
	  "method"  : "GET",
	  "headers" : 
         {
		        "x-rapidapi-host" : "random-words5.p.rapidapi.com",
		        "x-rapidapi-key"  : "6380941e96msh759d45d28810a94p1e90a5jsnee97fc4ccaad"
	       }
  })
  .then(response => response.json())
  .then(data =>  
         {
           listData = data
         })





setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_brndsc").value = listData[0];
                           
                           val1 = document.querySelector("#txt_brndsc").value; 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-state-default')[3].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                     setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[2].click();// close button
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       


// brand documented
  localStorage.setItem("getRandom", 0);
function brand() {
let getRand = localStorage.getItem("getRandom");

let  listData = [
            'Gatorade',
             'Gilbeys',
           'Coca-Cola',
            'Absolute',
            'Fundador',
             'Tanduay',
            'Red Bull'
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_brndsc").value = listData[getRand];
                           
                           val1 = document.querySelector("#txt_brndsc").value; 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-state-default')[3].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                     setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[2].click();// close button
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)     
  
  let getRand = localStorage.getItem("getRandom");

  let  listData = [
              'Gatorade',
               'Gilbeys',
             'Coca-Cola',
              'Absolute',
              'Fundador',
               'Tanduay',
              'Red Bull'
                  ]
  
  setTimeout( () =>
  
    { 
  
            document.querySelector('#add_btn').click();
            setTimeout(() => 
  
                          { 
                             document.querySelector("#txt_brndsc").value = listData[0];
                             
                             val1 = document.querySelector("#txt_brndsc").value; 
                             if (val1 == "undefined") {
                               document.querySelectorAll('.ui-state-default')[2].click();
                             }
                             else {
                             setTimeout(() => 
  
                                   { 
  
                                       document.querySelectorAll('.ui-state-default')[3].click();
                                       setTimeout(() => 
  
                                                {
  
                                                  document.querySelector('.ajs-button.print').click();
                                                  localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                       setTimeout(() =>   {
                                                              document.querySelectorAll('.ui-state-default')[2].click();// close button
                                                          },2000)
                                                },2000)
  
                                   },2000)
                             }     
                          },2000)
    },6000)      
              
}

brand();
            
  //item class

  localStorage.setItem("getRandom", 0);

function itemclass() {
let getRand = localStorage.getItem("getRandom");

let  listData = [
            'Beverages',
            'Alcohol',
            'Energy Drink',
            'Water'
            
    
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_itmclacde").value = listData[getRand];
                           val1 = document.querySelector("#txt_itmclacde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
}

itemclass();

  //terms
  localStorage.setItem("getRandom", 0);
  localStorage.setItem("getRandom1", 0);
  function terms() {
  let getRand = localStorage.getItem("getRandom");
  let getRand1 = localStorage.getItem("getRandom1");
  
  let  listData = [
                        'COD',
                    '30 Days',
                    '45 Days',
                    '60 Days'        
                  ]
  
// for shorter arrays its ok inline                  
let  listData1 = ['0', '30', '45', '60']
  
setTimeout( () =>
  
    { 
  
            document.querySelector('#add_btn').click();
            setTimeout(() => 
  
                          { 
                             document.querySelector("#txt_info_trmdsc").value = listData[getRand];
                              document.querySelector("#txt_info_trmday").value = listData1[getRand1];
                             val1 = document.querySelector("#txt_info_trmdsc").value; 
                            
                             if (val1 == "undefined") {
                               document.querySelectorAll('.ui-state-default')[2].click(); //close
                             }
                             else {
                             setTimeout(() => 
  
                                   { 

                                       document.querySelectorAll('.ui-state-default')[3].click(); //save
                                       setTimeout(() => 
  
                                                {
  
                                                  document.querySelector('.ajs-button.print').click(); //ok btn
                                                  localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                  localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                          // for existing data
                                                          setTimeout(() =>   {
                                                              document.querySelectorAll('.ui-state-default')[2].click(); //close
                                                          },2000)
                                                },2000)
  
                                   },2000)
                             }     
                          },2000)
    },6000)       
  }
  
  terms();
   //memo type


   
localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); // for GL
function memo(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); // for GL

let  listData = [
            'ADV FR CUST',
            'ADV TO SUPP',
           'DELIVERY FEE',
              'FURN FIXT',
            'PURCH DISCT',
       'PRICE ADJUSTMENT',
            'SALES DISCT',
              'REP MAINT',
              'UTILITIES',
            'VAT PAYABLE'
                ]


                let  listData1 = [
                  'Payables',
               'Receivables',
                  'Payables',
                  'Payables',
                  'Payables',
                  'Payables',
               'Receivables',
                  'Payables',
                  'Payables',
                  'Payables'

                  
                      ]

                      let  listData2 = [
                         'L-00010-02',
                            'A-00035',
                            'X-00420',
                            'A-00200',
                            'R-00060',
                         'L-00010-01',
                            'C-00020',
                            'X-00500',
                         'X-00030-01',
                            'L-00020'

                        
                            ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_memtypdsc").value = listData[getRand];
                           document.querySelectorAll('.input')[5].value = listData1[getRand1];
                           document.querySelector("#txt_glacc").value = listData2[getRand2];
                           val1 = document.querySelector("#txt_memtypdsc").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                        
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)   
  
  
}

memo();


 /* var feed =  document.querySelectorAll(".input.required option")[2].innerHTML;
  var data = [];
  data.push(feed);
  
  console.log(data);

  document.querySelectorAll(".input.required option").length = data; */

  //chart of accounts


localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); 
localStorage.setItem("getRandom3", 0); 
function chartacc(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); 
let getRand3 = localStorage.getItem("getRandom3"); 

let  listData = [
              'A-00010',
              'A-00010-01',
              'A-00010-05',
              'A-00010-10',
              'A-00010-12',
              'A-00010-20',
              'A-00030',
              'A-00034',
              'A-00035',
              'A-00040',
              'A-00041',
              'A-00042',
              'A-00044',
              'A-00045',
              'A-00046',
              'A-00047',
              'A-00070',
              'A-00070-01',
              'A-00070-02',
              'A-00070-03',
              'A-00070-04',
              'A-00100',
              'A-00200',
              'A-00210',
              'A-00300',
              'A-00990',
              'L-00010',
              'L-00010-01',
              'L-00010-05',
              'L-00020',
              'L-00040',
              'L-00050',
              'L-00200',
              'E-00010',
              'E-00015',
              'E-00020',
              'E-00030',
              'R-00010',
              'R-00020',
              'R-00040',
              'R-00050',
              'R-00060',
              'C-00010',
              'C-00010-01',
              'C-00010-02',
              'C-00010-03',
              'C-00020',
              'C-00030',
              'C-00050',
              'X-00010',
              'X-00020',
              'X-00030',
              'X-00030-01',
              'X-00030-02',
              'X-00030-03',
              'X-00030-03-01',
              'X-00340',
              'X-00341',
              'X-00350',
              'X-00410',
              'X-00420',
              'X-00500',
              'X-00510',
              'X-00520',
              'X-00540',
              'X-00990'

  
  
                ]


                let  listData1 = [
                
                  'Cash',
                  'Petty Cash',
                  'Cash on Hand',
                  'CIB-BDO-SA-2265',
                  'CIB-BDO-CA-1969',
                  'Checks on hand',
                  'Accounts Receivable',
                  'Advances to Employees',
                  'Advances to Supplier',
                  'VAT Input',
                  'Pre-paid EWT',
                  'Pre-paid EVAT',
                  'Pre-paid Cable',
                  'Pre-paid Insurance',
                  'Pre-paid Rent',
                  'Rental Deposit',
                  'Inventory',
                  'Inventory-Alcohol',
                  'Inventory-Beverages',
                  'Inventory-Energy Drink',
                  'Inventory-Water',
                  'Office Supplies',
                  'Furniture & Fixtures',
                  'Equipment',
                  'Depreciation',
                  'Goodwill',
                  'Accounts Payable',
                  'Accounts Payable-Trade',
                  'Advances from Customer',
                  'Output VAT',
                  'EWT Payable',
                  'EVAT Payable',
                  'Advances from Subsidiaries',
                  'Retained Earnings',
                  'Prior Period Adjustments',
                  'Capital, Partner A',
                  'Capital, Partner B',
                  'SALES',
                  'Service Revenue',
                  'Interest Income',
                  'Inventory Gain',
                  'Purchase Discounts',
                  'Cost of Goods Sold',
                  'CGS-Alcohol',
                  'CGS-Beverages',
                  'CGS-Water',
                  'Sales Discount',
                  'Sales Return',
                  'Inventory Loss',
                  'Salaries',
                  'Rental',
                  'Utilities',
                  'Electricity ',
                  'Water ',
                  'Communication ',
                  'Telephone',
                  'Transportation ',
                  'Gasoline, Oil, Parking & Toll Fees',
                  'Supplies',
                  'Bank Charges',
                  'Delivery Charge',
                  'Repairs & Maintenance',
                  'Meals & Representation',
                  'Insurance',
                  'Depreciation',
                  'Miscellaneous'



                  
                      ]


                      let  listData2 = [
                      
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Fixed Assets',
                        'Fixed Assets',
                        'Fixed Assets',
                        'Other Assets',
                        'Current Liabilities',
                        'Current Liabilities',
                        'Current Liabilities',
                        'Current Liabilities',
                        'Current Liabilities',
                        'Current Liabilities',
                        'Other Liabilities',
                        'Equity',
                        'Equity',
                        'Equity',
                        'Equity',
                        'Revenue',
                        'Revenue',
                        'Revenue',
                        'Revenue',
                        'Revenue',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense'

                            ]

                            let  listData3 = [
                      
                              '',
                              'A-00010',
                              'A-00010',
                              'A-00010',
                              'A-00010',
                              'A-00010',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'L-00010',
                              'L-00010',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'C-00010',
                              'C-00010',
                              'C-00010',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'X-00030',
                              'X-00030',
                              'X-00030',
                              'X-00030-03',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              ''

                          
                                  ]

                             
                            

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_actcde").value = listData[getRand];
                           document.querySelector("#txt_actdsc").value = listData1[getRand1];
                           $("#acctyp").val(listData2[getRand2]).change(); 
                           document.querySelector('#txt_pacc').value = listData3[getRand3];

                  
                           var xi = document.querySelector('#acctyp').value;
                           var x = document.querySelector("#txt_cacc");
                        
                           if (xi == 'Revenue' || xi == 'Expense' ) {
                       
                             x.value = "E-00010";
                             
                           }  else if (xi == 'Cost of Goods') {
                       
                             x.value = "E-00010";
                       
                           }else{
                                  false;
                           }

         
         
                           val1 = document.querySelector("#txt_actcde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                                                        
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      

}

chartacc();
//bank account 

localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); 
function bank(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2");

let  listData = [
  'BDO-SA-2265',
  'BPI-CA-1969'
] 
let  listData1 = [
'Bank-BDO-SA-2265',
'Bank-BDO-CA-1969'
] 
let  listData2 = [
'000101',
'001101'
]           

setTimeout( () =>

  { 

          document.querySelector('#tsb_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_brhcde").value = listData[getRand];
                           document.querySelector("#txt_bnkcde").value = listData1[getRand1];
                           document.querySelector("#txt_actcde").value = listData2[getRand2];
                           val1 = document.querySelector("#txt_brhcde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                  document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                      
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
}
bank();

//Type of advances
  localStorage.setItem("getRandom", 0);
  localStorage.setItem("getRandom1", 0);
  function typeAd() { 
  let getRand = localStorage.getItem("getRandom");
  let getRand1 = localStorage.getItem("getRandom1");
  
  let  listData = [
    'PETTY CASH',
    'ADV TO EMP'
          
                  ]
  
// for shorter arrays its ok inline                  
let  listData1 = ['A-00010-01', 'A-00034']
  
setTimeout( () =>
  
    { 
  
            document.querySelector('#add_btn').click();
            setTimeout(() => 
  
                          { 
                             document.querySelector("#txt_advtypcde").value = listData[getRand];
                              document.querySelector("#txt_glactcde").value = listData1[getRand1];
                             val1 = document.querySelector("#txt_advtypcde").value; 
                            
                             if (val1 == "undefined") {
                              document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                             }
                             else {
                             setTimeout(() => 
  
                                   { 

                                    document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                       setTimeout(() => 
  
                                                {
  
                                                  document.querySelector('.ajs-button.print').click(); //ok btn
                                                  localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                  localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                   // for existing data
                                                          setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                                          },2000)
                                                },2000)
  
                                   },2000)
                             }     
                          },2000)
    },6000)       

  }

  typeAd();

// employee


localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0);
localStorage.setItem("getRandom3", 0);
localStorage.setItem("getRandom4", 0);
function emp(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2");
let getRand3 = localStorage.getItem("getRandom3");
let getRand4 = localStorage.getItem("getRandom4");

let  listData = [
              'Haskell Grimes',
               'Stevie Conner',
     'Dr. Katrine Kessler DDS',
           'Rudolph Maggio II',
        'Mrs. Verna Doyle DVM',
          'Prof. Vena Hane II',
               'Mariah Erdman',
        'Mr. Walter Towne Sr.',
       'Dr. London Cartwright',
                 'Tia Wiegand'
                ]

                
                          let  listData1 = [
                                    '22 Kiehn Center, Poblacion, Imus 6228 Kalinga',
                                    '85/74 Walter Shores, Poblacion, Meycauayan 0496 Southern Leyte',
                                    '27A/15 Renner Port, Poblacion, Tuguegarao 5202 Davao Oriental',
                                    '59/58 Feeney Roads Apt. 317, Lamitan City 6047 Maguindanao',
                                    '17A/32 Goyette Place Suite 594, Poblacion, Puerto Princesa 6981 Misamis Oriental',
                                    '50/95 Ondricka Estates, Poblacion, San Carlos 3596 Romblon',
                                    '37/24 Haag Place Apt. 253, Gregorio Del Pilar 0101 Cagayan',
                                    '71/64 Gerhold Mills, Sapa-Sapa 9425 Aurora',
                                    '38A Langworth Motorway, Polanco 6259 Surigao del Sur',
                                    '31/66 Keebler Fork Apt. 397, Datu Piang 5810 Biliran'
                                             ]


                                      let  listData2 = [
                                                      '774-999-002',
                                                      '523-868-576',
                                                      '718-280-992',
                                                      '678-213-062',
                                                      '701-323-756',
                                                      '620-174-601',
                                                      '338-316-811',
                                                      '855-743-111',
                                                      '306-405-579',
                                                      '321-640-717'
      
                                                      ]
             
                                            let  listData3 = [
                                                        'Ms. Ericka Lind MD',
                                                        'Ms. Liliane Kunde PhD',
                                                        'Ara Osinski',
                                                        'Jacinthe Hoppe',
                                                        'Dr. Jermaine Lockman Jr.',
                                                        'Breanne Rath',
                                                        'Tabitha Blick',
                                                        'Ms. Arvilla Ebert',
                                                        'Eryn Monahan',
                                                        'Pattie Beahan I'
                                                                        ]

                                                                    let  listData4 = [
                                                                      ' 000444734-000',
                                                                       '000845543-000',
                                                                       '000594807-000',
                                                                      ' 239952660-000',
                                                                      ' 000316497-000',
                                                                       '005035491-000',
                                                                       '226444142-000',
                                                                      ' 000161142-000',
                                                                       '217569500-000',
                                                                       '402051129-000',

                                                                               ]
setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_info_borcde").value = listData[getRand];
                            document.querySelector("#txt_info_boradd1").value = listData1[getRand1];
                            document.querySelector("#txt_info_telno").value = listData2[getRand2];
                            document.querySelector("#txt_info_conper").value = listData3[getRand3];
                            document.querySelector("#txt_info_tinnum").value = listData4[getRand4];
                            
                           val1 = document.querySelector("#txt_info_borcde").value; 
                          
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                  document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click(); //ok btn
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                                                localStorage.setItem("getRandom4", parseInt(getRand4) + 1);
                                                 // for existing data
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
}

emp();


  //warehouse
  localStorage.setItem("getRandom", 0);

  function ware(){
  let getRand = localStorage.getItem("getRandom");
  
  let  listData = [
              'warehouse1',
              'warehouse2',
              'warehouse3',
              
                  ]
  
  setTimeout( () =>
  
    { 
  
            document.querySelector('#add_btn').click();
            setTimeout(() => 
  
                          { 
                             document.querySelector("#txt_wardsc").value = listData[getRand];
                             
                             val1 = document.querySelector("#txt_wardsc").value; 
                             if (val1 == "undefined") {
                              document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                             }
                             else {
                             setTimeout(() => 
  
                                   { 
  
                                    document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                       setTimeout(() => 
  
                                                {
  
                                                  document.querySelector('.ajs-button.print').click();
                                                  localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                       setTimeout(() =>   {
                                        document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                          },2000)
                                                },2000)
  
                                   },2000)
                             }     
                          },2000)
    },6000)       
  }
  
  ware();



// item
/***********************************************
  **THE BEST WAY WITHOUT USING LOCALSTORAGE**
************************************************/

let  listData = [
  'ITM99',
  'ITM100',
  'ITM200',
  'ITM252',
  'ITM310',
  'ITM312',
  'ITM314',
  'ITM316',
  'ITM320',
  'ITM322',
  'ITM324',
  'ITM400',
  'ITM402',
  'ITM500',
  'ITM501',
  'ITM502'

        ]

        setTimeout(() => 
              
   {   

                 
     document.querySelector('#add_btn').click();
     // open the page
            
          setTimeout(() => 
              
          { 

                              let listExistngData = [];  // Array In which we'll store existing data of list

                              document.querySelectorAll('#datatable tr td').forEach((data) => 
                                {  // tds only under #datatable tr
                                    (data.id == 'itmdsc') ? listExistngData.push(data.innerText) : false ;  
                                     // If any td have this id only then insert its text in array
                                })  

                                let counter1 = 0;
                           
                                setInterval(() =>
                                  {
                                    // if condition matches then add that text else try next text
                                    if(!listExistngData.includes(listData[counter1]))
                                      { 
                                          document.querySelector('#txt_info_itmdsc').value = listData[counter1];
                                        setTimeout(() => {   document.querySelectorAll('.ui-dialog-buttonset')[1].querySelectorAll('button')[0].click();   },2000)  
                                      }
                                     else 
                                      {
                                         counter1++;
                                      }                                         


                                  },2000)

          },5000)
},5000)
                            

/*******************************************/                            

    
  






localStorage.setItem("data", 0);



let  listData1 = [ //Item Type
                                                    
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY'
  
  
        ]

        let  listData2 = [ //Classification
          'Water',
          'Water',
          'Water',
          'Water',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Alcohol',
          'Alcohol',
          'Beverages',
          'Beverages',
          'Energy Drink'
          

        ]

        let  listData3 = [ //Brand
  
          'Absolute',
          'Absolute',
          'Absolute',
          'Wilkins',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Fundador',
          'Fundador',
          'Gatorade',
          'Gatorade',
          'Gatorade'
          
        ]

        let  listData4 = [ //warehouse
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1'
        
        ]

        let  listData5 = [ //U/M 
          'BTL ',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL'
          

        ]

        let  listData6 = [ //Unit Cost (BTL)
          '82',
          '15',
          '10',
          '16',
          '11',
          '11',
          '11',
          '11',
          '13',
          '13',
          '13',
          '235',
          '362',
          '20',
          '20',
          '20'
          

        ]

        let  listData7 = [ // Selling Price (BTL)
          '110',
          '20',
          '15',
          '22',
          '15',
          '15',
          '15',
          '15',
          '18',
          '18',
          '18',
          '325',
          '490',
          '30',
          '30',
          '30',
          

        ]
        let  listData8 = [ // Re-order Level
                  '500',
                  '501',
                  '502',
                  '503',
                  '508',
                  '509',
                  '510',
                  '511',
                  '512',
                  '513',
                  '514',
                  '520',
                  '521',
                  '522',
                  '523',
                  '524'

        ]

     
        
        
         
        var counter= localStorage.getItem("data");


        
            

                    document.querySelector("#txt_info_itmtyp").value = listData1[counter];
                    document.querySelector("#txt_info_itmclacde").value = listData2[counter];
                    document.querySelector("#txt_info_brncde").value = listData3[counter];
                    document.querySelector("#txt_info_warcde").value = listData4[counter];
                          setTimeout(() => 

                          { 
                          document.querySelector("#txt_info_untmea1").value = "";
                          document.querySelector("#txt_info_untcst").value = "";
                          document.querySelector("#txt_info_untprc").value = "";
                          document.querySelector("#txt_info_crilvl").value = "";

                          },2000)
                          setTimeout(() => 

                          { 
                          document.querySelector("#txt_info_untmea1").value  = listData5[counter];
                          document.querySelector("#txt_info_untcst").value  = listData6[counter];
                          document.querySelector("#txt_info_untprc").value  = listData7[counter];
                          document.querySelector("#txt_info_crilvl").value  = listData8[counter];

                          },3000)
                          document.querySelector("#rdo_trd").checked = true;
                          setTimeout(() => 

                          { 
                            document.querySelector("#ui-id-3").click();

                          },4000)
                    
                          document.querySelector("#txt_info_taxcde").value = "";
                          document.querySelector("#txt_info_taxcde").value = "";
                          document.querySelector("#txt_info_ewtcde").value = "";
                          document.querySelector("#txt_info_ewtcde").value = "";
                          document.querySelector("#txt_info_evatcde").value = "";
                          document.querySelector("#txt_info_evatcde").value = "";
                          
                          counter++;
                          
                          localStorage.setItem("data",counter);


                                         
                                                              setTimeout(() => 
                                    
                                                                    { 
                                    
                                                                      document.getElementsByName('btnsave')[0].click();
                                                                      
                                                                    },2000)
                                                                        setTimeout(() => 
                                    
                                                                                  {
                                    
                                                                                  document.querySelector('.ajs-button.print').click();
                                                                                    
                                                                        
                                                                                  },2000)
                                                                    



// inventory transaction type


localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); 

function inv(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); 

let  listData = [
            
               'IN',
              'OUT',
              'STT'
                ]


                let  listData1 = [
                
                  'INCOMING STOCK',
                  'OUTGOING STOCK',
                  'STOCK TRANSFER'

                  
                      ]

                      let  listData2 = [
                         
                            'ADJ',
                            'OUT',
                            'STT'

                        
                            ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_info_trntypcde").value = listData[getRand];
                           document.querySelector("#txt_info_trntypdsc").value = listData1[getRand1];
                           document.querySelector('#txt_info_trncde').value = listData2[getRand2];
                           
                           val1 = document.querySelector("#txt_info_trntypcde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                        
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      
}

inv();


  //VAT CODE 


localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); 
function vat(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); 

let  listData = [
            
                  'PUR VAT',
                  'SAL VAT',
              'VAT 0 RATED',
              'VAT EXEMPT'
                ]


                let  listData1 = [
                
                  '12',
                  '12',
                  '0',
                  '0'

                  
                      ]

                      let  listData2 = [
                         
                            'Purchases',
                                'Sales',
                              'Default',
                              'Default'

                        
                            ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_info_taxcde").value = listData[getRand];
                           document.querySelector("#txt_info_taxper").value = listData1[getRand1];
                           document.querySelector('#txt_info_taxtyp').value = listData2[getRand2];
                           
                           val1 = document.querySelector("#txt_info_taxcde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                        
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      
}
vat();

  //EWT
localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); 
localStorage.setItem("getRandom3", 0);
localStorage.setItem("getRandom4", 0);
localStorage.setItem("getRandom5", 0); 
localStorage.setItem("getRandom6", 0); 
localStorage.setItem("getRandom7", 0); 
function ewt(){
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); 
let getRand3 = localStorage.getItem("getRandom3");
let getRand4 = localStorage.getItem("getRandom4");
let getRand5 = localStorage.getItem("getRandom5"); 
let getRand6 = localStorage.getItem("getRandom6");
let getRand7 = localStorage.getItem("getRandom7"); 

let  listData = [
            
                  'PROF FEES',
                  'PUR GOODS',
               'PUR SERVICES',
                       'RENT',
                  'SAL GOODS',
              'SAL SERVICES'
                ]


                let  listData1 = [
                
                 '10.00',
                  '1.00',
                  '2.00',
                  '5.00',
                  '1.00',
                  '2.00'

                  
                      ]
                      let  listData2 = [
                                                 
                        'Default',                              
                        'Purchases',
                        'Purchases',
                        'Default', 
                        'Sales',
                        'Sales'
                      ]
                      let  listData3 = [
                         
                        'WC010',
                        'WC158',
                        'WC160',
                        'WC100',
                        'WC158',
                        'WC160'

                        
                            ]
                            let  listData4 = [
                
                              'Professional/Talent fees paid to juridical persons',
                              'Payments made by top 10,000 private corporations',
                              'Payments made by top 10,000 private corporations',
                              'Rentals-Real Properties & Personal Properties,',
                              'Payments made by top 10,000 private corporations',
                              'Payments made by top 10,000 private corporations'
            
                              
                                  ]
            
                                  let  listData5 = [
                                     
                                        '/individuals (Lawyers,CPAs, etc.)',
                                            'to their local/resident suppliers of goods',
                                          'to their local/resident suppliers of services',
                                          'Poles, Satellites & Transmission facilities & ',
                                          'to their local/resident suppliers of goods',
                                          'to their local/resident suppliers of services'
            
                                    
                                        ]
                                        let  listData6 = [
                
                                          'Billboards',
                                          '',
                                          '',
                                          '',
                                          '',
                                          ''
                        
                                          
                                              ]
                        
                                              let  listData7 = [
                                                 
                                                    
                                          '',
                                          '',
                                          '',
                                          '',
                                          '',
                                          ''
   
                                             ]
                                           
              
setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_info_ewtcde").value = listData[getRand];
                           document.querySelector("#txt_info_ewtrte").value = "";
                           setTimeout(() => 
                           {
                           document.querySelector("#txt_info_ewtrte").value = listData1[getRand1];
                           },2000)
                           document.querySelector('#txt_info_taxtyp').value = listData2[getRand2];
                           document.querySelector("#txt_info_atccde").value = listData3[getRand3];
                           document.querySelector("#txt_info_nature1").value = listData4[getRand4];
                           document.querySelector('#txt_info_nature2').value = listData5[getRand5];
                           document.querySelector('#txt_info_nature3').value = listData6[getRand6];
                           document.querySelector('#txt_info_nature4').value = listData7[getRand7];
                           
                           val1 = document.querySelector("#txt_info_ewtcde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                                                localStorage.setItem("getRandom4", parseInt(getRand4) + 1);
                                                localStorage.setItem("getRandom5", parseInt(getRand5) + 1);
                                                localStorage.setItem("getRandom6", parseInt(getRand6) + 1);
                                                localStorage.setItem("getRandom7", parseInt(getRand7) + 1);
                                                        
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      
}
ewt();
  //EVAT

   localStorage.setItem("getRandom", 0);
   localStorage.setItem("getRandom1", 0);
   localStorage.setItem("getRandom2", 0); 
   localStorage.setItem("getRandom3", 0);
   localStorage.setItem("getRandom4", 0);
   localStorage.setItem("getRandom5", 0); 
   localStorage.setItem("getRandom6", 0); 
   localStorage.setItem("getRandom7", 0); 
function evat() { 
   let getRand = localStorage.getItem("getRandom");
   let getRand1 = localStorage.getItem("getRandom1");
   let getRand2 = localStorage.getItem("getRandom2"); 
   let getRand3 = localStorage.getItem("getRandom3");
   let getRand4 = localStorage.getItem("getRandom4");
   let getRand5 = localStorage.getItem("getRandom5"); 
   let getRand6 = localStorage.getItem("getRandom6");
   let getRand7 = localStorage.getItem("getRandom7"); 

let  listData = [
            
                     'PUR GOODS',
                  'PUR SERVICES',
                     'SAL GOODS',
                  'SAL SERVICES',
                  'VAT EXEMPT'
                ]


                let  listData1 = [
                
                 '10.00',
                 '10.00',
                 '10.00',
                 '10.00',
                  '3.00'

                  
                      ]

                      let  listData2 = [
                                                 
                        'Purchases',                              
                        'Purchases',
                        'Sales',
                        'Sales',
                        'Default'

                                    ]
                      let  listData3 = [
                         
                        'WV012',
                        'WV022',
                        'WV012',
                        'WV022',
                        'WB080'

                        
                            ]
                            let  listData4 = [
                
                              '	VAT Withholding on Purchase of Goods (with',
                              '	VAT Withholding on Purchase of Services',
                              '	VAT Withholding on Purchase of Goods (with',
                              'VAT Withholding on Purchase of Services',
                              'Person exempt from VAT under Sec. 109 (z)'
            
                              
                                  ]
            
                                  let  listData5 = [
                                     
                                        'waiver of privilege to claim input tax credits)',
                                            '(with waiver of privilege to claim input tax ',
                                          'waiver of privilege to claim input tax credits)',
                                          '(with waiver of privilege to claim input tax',
                                          '(Private Withholding Agent)'

                                        ]

                                        let  listData6 = [
                
                                          'credits)',
                                          '',
                                          '',
                                          'credits)',
                                          '',
                                          ''
                        
                                          
                                              ]
                        
                                              let  listData7 = [
                                                 
                                                    
                                          '',
                                          '',
                                          '',
                                          '',
                                          '',
                                          ''
   
                                                    ]
                                           
                                       
setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_info_evatcde").value = listData[getRand];
                           document.querySelector("#txt_info_evatrte").value = "";
                           setTimeout(() => 
                           {
                           document.querySelector("#txt_info_evatrte").value = listData1[getRand1];
                           },2000)
                           document.querySelector('#txt_info_taxtyp').value = listData2[getRand2];
                           document.querySelector("#txt_info_atccde").value = listData3[getRand3];
                           document.querySelector("#txt_info_nature1").value = listData4[getRand4];
                           document.querySelector('#txt_info_nature2').value = listData5[getRand5];
                           document.querySelector('#txt_info_nature3').value = listData6[getRand6];
                           document.querySelector('#txt_info_nature4').value = listData7[getRand7];
                           
                           val1 = document.querySelector("#txt_info_evatcde").value; 
                           if (val1 == "undefined") {
                            document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                                                localStorage.setItem("getRandom4", parseInt(getRand4) + 1);
                                                localStorage.setItem("getRandom5", parseInt(getRand5) + 1);
                                                localStorage.setItem("getRandom6", parseInt(getRand6) + 1);
                                                localStorage.setItem("getRandom7", parseInt(getRand7) + 1);
                                               
                                                        
                                                        setTimeout(() =>   {
                                                          document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[2].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      


}

evat();




// random words

let listData = '';
fetch("https://random-words5.p.rapidapi.com/getMultipleRandom?count=1000", 
  {
	  "method"  : "GET",
	  "headers" : 
         {
		        "x-rapidapi-host" : "random-words5.p.rapidapi.com",
		        "x-rapidapi-key"  : "6380941e96msh759d45d28810a94p1e90a5jsnee97fc4ccaad"
	       }
  })
  .then(response => response.json())
  .then(data =>  
         {
           listData = data
         })


         setTimeout(() => 

                        { 
                           document.querySelector("#salonname").value = listData[0];


                          },2000)

                
 document.getElementById('acctyp').addEventListener('change', function() {
this.value = "Revenue";
});    

let  listData2 = [
                      

  'Revenue',
  'Revenue',
  'Revenue',
  'Revenue',
  'Revenue',
  'Cost of Goods',
  'Cost of Goods',
  'Cost of Goods',
  'Cost of Goods',
  'Cost of Goods',
  'Cost of Goods',
  'Cost of Goods',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense',
  'Expense'

      ]
$("#acctyp").val(listData2).change();

var selEl = document.getElementById("acctyp");
selEl.options[1].selected = true;
selEl.onchange();



