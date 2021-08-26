     


// Acount type description
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                    'Savings Account',
                     'Credit Account',
                    'Payroll Account',
                      'Debit Account'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_bnkacttypdsc").value = listData[getRand ];

                           val1 = document.querySelector("#modalField_bnkacttypdsc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
                                //no code anymore , so the data is not necessary just for testing
                                ;(function() {
                                    var randomString = function(length) {
                                        
                                        var text = "";
                                    
                                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                                        
                                        for(var i = 0; i < length; i++) {
                                        
                                            text += possible.charAt(Math.floor(Math.random() * possible.length));
                                        
                                        }
                                        
                                        return text;
                                    }

                                    // random string length
                                    var random = randomString(10);

                                    
                                    // insert random string to the code field
                                    var elem = document.getElementById("modalField_bnkacttypcde").value = random;
                                    
                                    
                                })();
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
                                }       
                        },2000)


  },6000)       
                  

  //Nationality
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                    'FILIPINO',
                     'CHINESE',
                    'JAPANESE',
                   'PAKISTANI',
                     'ITALIAN',
                    'NIGERIAN',
                      'KOREAN'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_natdsc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_natdsc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_diag_save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                        if (val1 === val1) // for existing data
                                                        setTimeout(() =>   {
                                                          document.querySelector("#btn_close").click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
                  
   //Industry
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
            'BUSINESS',
            'SOFTWARE',
            'HARDWARE',
            'CORPORATE'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_inddsc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_inddsc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                           }     
                        },2000)


  },6000)       
                  
  //I.D. Type
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
        'DRIVERS LICENSE',
                    'SSS',
                    'TIN',
              'PHILHEALTH'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_idtypdsc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_idtypdsc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                               }     
                        },2000)


  },6000)       
                  
  //Division
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");
getItem.splice(getRandom, 1);
let  listData = [
          'PRODUCTION',
            'CHECKING',
            'RELEASING',
          'PREPARATION'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_divdesc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_divdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                                }     
                        },2000)


  },6000)       
                  
 //Branch
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
            'CALOOCAN',
            'MALABON',
            'NAVOTAS',
            'VALENZUELA'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_branchdesc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_branchdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                                } 
                        },2000)


  },6000)       
                  
   //Position
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
           'Executive Officer',
              'Branch Manager',
                  'Supervisor',
                  'IT Manager',
           'Operation Manager',
        'Assistant Supervisor',
                    'IT Staff',
     'User Interface Designer',
                  'Programmer',
                  'QA Tester'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_posdesc").value = listData[getRand ];

                           val1 = document.querySelector("#modalField_posdesc").value; 
                              if (val1 == "undefined") {
                                document.querySelector("#btn_diag_close").click();
                              }
                              else {
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
                                        }    
                        },2000)


  },6000)       
                  
 
    //Piece Rate
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
            'Box-1',
            'Scrap-1',
            'Per Trip',
            'Box-2',
            'Scrap-2',
            'Box-3',
            'Scrap-3',
            'Box-4',
            'Scrap-4',
            'Box-5',
            'Scrap-5',
            'Box-6',
            'Scrap-6'
            
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txtdesc").value = listData[getRand];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                             ;(function() {
                              
                                  //amount
                                  var NumArray = [
                                    '20',
                                    '50',
                                    '30',
                                    '70',
                                    '60',
                                    '90',
                                    '300'
                                  ];
                                  var randomNumber = NumArray[Math.floor(Math.random()*NumArray.length)]
                                   document.getElementById("txtamount").value = randomNumber;

                               })();
                                          ;(function() {

                                            // TaxClass
                                                  var TaxData = [
                                                    'BAS',
                                                    'REG',
                                                    'SUP',
                                                    'NT',
                                                    'BEN'
                                                  ]
                                                  let genData = TaxData[Math.floor(Math.random() * TaxData.length)]
                                                   document.getElementById("txtclass").value = genData;


                                        })();



                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)


  },6000)       
                  
  localStorage.setItem("getRandom", 0);
// if desc  textbox only
  let getRand = localStorage.getItem("getRandom");
  
  let  listData = [
                'Box-1',
                'Scrap-1',
                'Per Trip',
                'Box-2',
                'Scrap-2',
                'Box-3',
                'Scrap-3',
                'Box-4',
                'Scrap-4',
                'Box-5',
                'Scrap-5',
                'Box-6',
                'Scrap-6'
                
    
                  ]
  
   document.querySelector("#txtdesc").value = listData[getRand];
  
  localStorage.setItem("getRandom", parseInt(getRand) + 1);

  

  //Job / Rank Level
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
          'EXECUTIVE LEVEL 1',
          'EXECUTIVE LEVEL 2',
            'MANAGER LEVEL 1',
            'MANAGER LEVEL 2'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_joblvldsc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_joblvldsc").value; 
                           if (val1 == "undefined") {
                            document.querySelector("#btn_close").click();
                          }
                          else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_diag_save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                                }    
                        },2000)


  },2000)       
                  
  //Suffix
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                'JR.',
                'III',
                'IV',
                'N/A'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_suffixdsc").value = listData[getRand ];
                                val1 = document.querySelector("#modalField_suffixdsc").value; 
                                if (val1 == "undefined") {
                                  document.querySelector("#btn_close").click();
                                }
                                else {
                           setTimeout(() => 

                                        { 

                                            document.querySelector('#btn_diag_save').click();
                                            setTimeout(() => 

                                                      {

                                                        document.querySelector('.ajs-button.print').click();
                                                        localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                              if (val1 === val1) // for existing data
                                                              setTimeout(() =>   {
                                                                document.querySelector("#btn_close").click();
                                                              },2000)
                                                      },2000)

                                        },2000)
                                }     
                        },2000)


  },6000)       
                  
  //Employee Status
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
              'Probationary',
              'Regular',
              'Temporary Separation',
              'Separated',
              'Terminated',
              'On Leave',
              'Floating',
              'Trainee'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        {  
                          //no code anymore , so the data is not necessary just for testing
                          ;(function() {
                            var randomString = function(length) {
                              
                              var text = "";
                            
                              var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                              
                              for(var i = 0; i < length; i++) {
                              
                                text += possible.charAt(Math.floor(Math.random() * possible.length));
                              
                              }
                              
                              return text;
                            }
                          
                            // random string length
                            var random = randomString(10);
                   
                            // insert random string to the code field
                            document.querySelector("#modalField_statusdesc").value = random;
                            
                            
                          })();

                           document.querySelector("#modalField_statusdesc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_statusdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                           }      
                        },2000)


  },6000)       
                  
  //Employee Type
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                'Full-time',
                'Part-time',
                   'Casual',
                 'Contract',
     'Piece Rate employees',
               'Fixed Term'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_emptypdsc").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_emptypdsc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                           }        
                        },2000)


  },6000)       
                  
  //Leaves
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                'Paternity Leave',
                'Maternity Leave',
                     'Sick Leave',
                 'Personal Leave',
                   'Annual Leave',
                            'SIL',
                           'LWOP'
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                          ;(function() {
                                var RandomTax = [
                                  'BAS',
                                  'BEN',
                                  'DM',
                                  'NT',
                                  'REG',
                                  'SUP'
                                  ]
                                  let genData = RandomTax[Math.floor(Math.random() * RandomTax.length)]
                                   document.getElementById("txtclass").value = genData;
                                            taxval = document.querySelector("#txtclass").value; 
                                            if (taxval == "") {
                                            document.querySelector("#txtclass").value = "BAS";
                                            }
                          })();

                           document.querySelector("#txtdesc").value = listData[getRand ];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                                }      
                        },2000)


  },6000)       
                  
  //other earnings - need to rerun
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
           
            'Monthly Allowance',
                 'Cash Advance',
         'Other Taxable Income',
                 'Rice Subsidy',
            'Laundry Allowance',
                   'Commission',
                    'Other Pay',
            'Salary Adjustment',
           'Non-Taxable Income'
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 


                          ;(function() {

                            // TaxClass
                                  var TaxData = [
                                    'BAS',
                                    'DM',
                                    'HP',
                                    'NT',
                                    'REG',
                                    'SUP'
                                  ]
                                  let genData = TaxData[Math.floor(Math.random() * TaxData.length)]
                                   document.getElementById("txtclass").value = genData;


                        })();


                           document.querySelector("#txtdesc").value = listData[getRand ];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)


  },6000)       
                  
//allowance
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
          'LOAD ALLOWANCE',
          'MEAL ALLOWANCE',
          'INTERNET ALLOWANCE',
          'OB ALLOWANCE'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txtdesc").value = listData[getRand ];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                                }       
                        },2000)


  },6000)       
                  
  //Other Deductions
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
          'Salary Adjustment',
          'Over Pay',
          'Damages',
          'Company Products',
          'Health Insurance'
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                          ;(function() {

                            // TaxClass
                                  var TaxData = [
                                   
                                    'NT',
                                    'DT'
                                    
                                  ]
                                  let genData = TaxData[Math.floor(Math.random() * TaxData.length)]
                                   document.getElementById("txtclass").value = genData;


                          })();
                           document.querySelector("#txtdesc").value = listData[getRand ];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                                }      
                        },2000)


  },6000)       
                  
  //department
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                'MIS',
                'CSR',
                 'HR',
                'SPE',
         'Accounting',
                 'IT',
              'Sales',
     'Implementation',
         'Programmer',
         'Purchasing',
               'Cebu',
                 'QA',
          'Project 1',
          'Project 2',
             'Design',
          'Analytics'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();


          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_deptdescription").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_deptdescription").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_diag_close").click();
                           }
                           else {
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
                           }     
                        },2000)


  },6000)       
                  
  //payroll Group
localStorage.setItem("getRandom", 0);
localStorage.setItem("PayVal", 0);


let getRand = localStorage.getItem("getRandom");
let payRand = localStorage.getItem("PayVal");
// Pay_val

let  listData = [
            'Weekly',
            'Semi-Monthly',
            'Monthly'
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 

                         

                            
                                  document.querySelector("#sel_paycycle").value = listData[payRand];
                                  payValue = document.querySelector("#sel_paycycle").value; 
                                  if (payValue == "") {
                                  document.querySelector("#sel_paycycle").value = "Weekly";
                                  }

                                      document.querySelector("#txt_paygroup").value = listData[getRand ];
                                      
                                      val1 = document.querySelector("#txt_paygroup").value; 

                                      switch (val1) {
                                        case "undefined":
                                          document.querySelector("#btn_close").click();
                                          break;
                                        case "0":
                                          document.querySelector("#btn_close").click();
                                          break;
                                        default:
                                        
                                          setTimeout(() => 

                                                { 

                                                    document.querySelector('#btn_Save').click();
                                                    setTimeout(() => 

                                                              {

                                                                document.querySelector('.ajs-button.print').click();
                                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                                localStorage.setItem("PayVal", parseInt(payRand) + 1);
                                                                      if (val1 === val1) // for existing data
                                                                      setTimeout(() =>   {
                                                                        document.querySelector("#btn_close").click();
                                                                      },2000)
                                                              },2000)

                                                },2000)
                                            }          
                        },2000)


  },6000)       
                  
  //Bank Account
localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
              'BDO',
              'CBS',
              'SBA',
              'BPI',
              'RBANK',
              'METROBANK',
              'PNB',
              'EASTWEST',
              'MALAYAN BANK',
              'UCPB',
              'RCBC',
              'LAND BANK',
              'CASH'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_bankdescription").value = listData[getRand ];
                           val1 = document.querySelector("#modalField_bankdescription").value; 
                           
                           switch (val1) {
                            case "undefined":
                              document.querySelector("#btn_diag_close").click();
                              break;
                            
                            default:
                            
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_diag_save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                    
                                                    if (val1 === val1)
                                                    setTimeout(() =>   {
                                                      document.querySelector("#btn_diag_close").click();
                                                    },2000)
                                              },2000)

                                 },2000)
                                }        
                        },2000)


  },6000)       
                  
  //Loans
  localStorage.setItem("getRandom", 0);

  let getRand = localStorage.getItem("getRandom");
  
  let  listData = [
            'Company Loan',
            'SSS Loan',
            'Pag-Ibig Loan',
            'Cash Advances'
                  ]
  
  setTimeout( () =>
  
    { 
  
            document.querySelector('#add_btn').click();
            setTimeout(() => 
  
                          { 
                             document.querySelector("#txtdesc").value = listData[getRand ];
                             val1 = document.querySelector("#txtdesc").value; 
                             
                             switch (val1) {
                              case "undefined":
                                document.querySelector("#btn_close").click();
                                break;
                              
                              default:
                              
                             setTimeout(() => 
  
                                   { 
  
                                       document.querySelector('#btn_Save').click();
                                       setTimeout(() => 
  
                                                {
  
                                                  document.querySelector('.ajs-button.print').click();
                                                  localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                                },2000)
  
                                   },2000)
                                  }        
                          },2000)
  
  
    },6000)       
     //Religion
  localStorage.setItem("getRandom", 0);                 
                  
    let getRand = localStorage.getItem("getRandom");

    let  listData = [
              'CATHOLIC',
              'IGLESIA',
              'CHRISTIAN',
              'BORN AGAIN'
                            
                    ]
    
    setTimeout( () =>
    
      { 
    
              document.querySelector('#pager_default_add').click();
              setTimeout(() => 
    
                            { 
                              document.querySelector("#modalField_religiondesc").value = listData[getRand ];
    
                              val1 = document.querySelector("#modalField_religiondesc").value; 
                                          if (val1 == "undefined") {
                                            document.querySelector("#btn_diag_close").click();
                                          }
                                          else {
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
                                    } 
                            },2000)
    
                          
      },2000)
      
                  
  //Nationality
// Run this only once before the script  
localStorage.setItem("getRandom", 0); // setting a variable getRandom in localstorage as 0

let getRand = localStorage.getItem("getRandom"); // getting the value of getRandom , so first time it will be 0

let  listData = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_religiondesc").value = listData[getRand ];
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_diag_save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                // after doing work there we are updating the value of getRandom
                                                // so if its 0 then for the next time would be 1 ,then 2 3 4 5etc
                                                //  in this way the index always change, 
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                            
                                              },2000)

                                 },2000)
                                     
                        },2000)


  },2000)       
       
  // Array should stand outside the function!
var msg = [
    "string one",
    "string two",
    "string three",
    "string for",
    "string five",
    "string six" /* add as many values as you want */
];

function randNumber(arr) { // arr as argument is needed, so that one can add as many values in msg as he wants
    var rand = Math.floor(Math.random() * arr.length);
    return rand;
}

function randWithout(n, arr) { // arr as argument is needed, so that one can add as many values in msg as he wants
    var res = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (i !== n) { // this would be 0
            res.push(i); // pushes 0
        }
    }
    return res[Math.floor(Math.random() * (arr.length - 1))];
}
// short and simple
(function message() {
    var intro = document.getElementById("modalField_religiondesc");
    var currNumber = randNumber(msg); // 5
    intro.value = msg[currNumber]; // "string six"
    var clickNumber = randWithout(currNumber, msg); 
    intro.onclick = function () {
        intro.value = msg[clickNumber];
        clickNumber = randWithout(clickNumber, msg);
    }
})()



(function message() {
  
    var randomMsg = [
      "string one",
      "string two",
      "string three",
      "string four",
      "string five"
    ];

    var currentMsg = randomMsg.slice().sort(function(){return Math.random()-0.5});
    var prevMsg = "";

    document.getElementById("modalField_religiondesc").value = currentMsg;

    document.getElementById("modalField_religiondesc").onclick = function() {
        var ranNum = Math.floor((Math.random() * 5) + 0);
        currentMsg = randomMsg[ranNum];
        if(prevMsg == currentMsg) {
            var anotherMsg = "";
            if(ranNum >= 0 && ranNum < 4) {
                anotherMsg = randomMsg[ranNum + 1];
            }
            else {
                anotherMsg = randomMsg[ranNum - 1];
            }
            document.getElementById("modalField_religiondesc").value = anotherMsg;
            prevMsg = anotherMsg; // set prevMsg to anotherMsg
        } else {
            document.getElementById("modalField_religiondesc").value = currentMsg;
            prevMsg = currentMsg; // set prevMsg to currentMsg
        };
    };
})();


        (function message() {
            var currentMsg, prevMsg;
            var ranNumber = Math.floor((Math.random() * 5) + 0);
            var randomMsg = [
            "string one",
            "string two",
            "string three",
            "string four",
            "string five"
            ];
            prevMsg = (prevMsg) ? prevMsg : "";
            var currentMsg = randomMsg[ranNumber];
            document.getElementById("modalField_religiondesc").value = currentMsg;

            document.getElementById("modalField_religiondesc").onclick = function() {
                var ranNum = Math.floor((Math.random() * 5) + 0);
                currentMsg = randomMsg[ranNum];
                if(prevMsg === currentMsg) {
                    ranNum = (ranNum === 4) ? 0 : ranNum++;
                    currentMsg = randomMsg[ranNumber];
                } 
            document.getElementById("modalField_religiondesc").value = currentMsg;
            prevMsg = currentMsg;       
        };
        })();



        for (let i = 0; i < 10; i++) {
          saySomething();
        }
    
        function saySomething() {
          ;(function() {
                                var randomString = function(length) {
                                  
                                  var text = '';
                                
                                  var possible = '0123456789';
                                  
                                  for(var i = 0; i < length; i++) {
                                  
                                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                                  
                                  }
                                  
                                  return text;
                                }
                              
                                // random string length
                                var random = randomString(10);
                       
                                // insert random string to the code field
                                document.querySelector('#recovery_code_entry').value = random;
                                
                                
                              })();
    
      document.getElementsByName("reset_action")[1].click();
                            }