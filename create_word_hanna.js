


//Account Type
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


  var listData = [
    'Savings Account',
    'Credit Account',
    'Payroll Account',
    'Debit Account'
  
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_bnkacttypdsc").value = genData;
  


  //Allowance
  var listData = [
    'LOAD ALLOWANCE',
    'MEAL ALLOWANCE',
    'INTERNET ALLOWANCE',
    'OB ALLOWANCE'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.querySelector("txtdesc").value = genData;

    //Bank Account
  var listData = [
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
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_bankdescription").value = genData;
  
  //Department
  var listData = [
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


    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_deptdescription").value = genData;

   //Employee Status
   //For Pager 
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
	var elem = document.getElementById("modalField_statuscode").value = random;
	
	
})();

  var listData = [
    'Probationary',
    'Regular',
    'Temporary Separation',
    'Separated',
    'Terminated',
    'On Leave',
    'Floating',
    'Trainee'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]

    var newdata = document.getElementById("modalField_statusdesc").value = genData;


  //Employment Type
  var listData = [
    'Full-time',
    'Part-time',
    'Casual',
    'Contract',
    'Piece Rate employees',
    'Fixed Term'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_emptypdsc").value = genData;

    //Leaves
  var listData = [
    'Paternity Leave',
    'Maternity Leave',
    'Sick Leave',
    'Personal Leave',
    'Annual Leave',
    'SIL',
    'LWOP'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.querySelector("#txtdesc").value = genData;






    //Loans
    var listData = [
      'Company Loan',
      'SSS Loan',
      'Pag-Ibig Loan',
      'Cash Advances'
      ]
      let genData = listData[Math.floor(Math.random() * listData.length)]
      var newdata = document.querySelector("#txtdesc").value = genData;

     //Other Deductions
  var listData = [
    'Salary Adjustment',
    'Over Pay',
    'Damages',
    'Company Products',
    'Health Insurance'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.querySelector("#txtdesc").value = genData;

    



  //Other Earnings
  var listData = [
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
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("txtdesc").value = genData;


    //tax classs
    var listData = [
      'BAS',
      'REG',
      'SUP',
      'NT',
      'DM',
      'BEN',
      'HP'
      ]
      let genData = listData[Math.floor(Math.random() * listData.length)]
      var newdata = document.getElementById("txtclass").value = genData;


    //Payroll Group
  var listData = [
    'Weekly',
    'Semi-Monthly',
    'Monthly'
    
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("txt_paygroup").value = genData;
    //sel_paycycle
    var newdata = document.getElementById("sel_paycycle").value = genData;
    
    

    //Piece Rate
  var listData = [
    'Box-1',
    'Scrap-1',
    'Box-2',
    'Scrap-2',
    'Box-3',
    'Scrap-3',
    'Per Trip'
    
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("txtdesc").value = genData;

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
  var newdata = document.getElementById("txtamount").value = randomNumber;

  // TaxClass
  var listData = [
      'BAS',
      'REG',
      'SUP',
      'NT',
      'BEN'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("txtclass").value = genData;

    //Position
  var listData = [
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
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_posdesc").value = genData;

    //Branch
  var listData = [
    'CALOOCAN',
    'MALABON',
    'NAVOTAS',
    'VALENZUELA'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_branchdesc").value = genData;
    //Division
    var listData = [
          'PRODUCTION',
            'CHECKING',
          'RELEASING',
          'PREPARATION'
      ]
      let genData = listData[Math.floor(Math.random() * listData.length)]
      var newdata = document.getElementById("modalField_divdesc").value = genData;
  
   //I.D. Type
   var listData = [
        'DRIVERS LICENSE',
                    'SSS',
                    'TIN',
              'PHILHEALTH'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_idtypdsc").value = genData;

    //Industry
  var listData = [
    'BUSINESS',
    'SOFTWARE',
    'HARDWARE',
    'CORPORATE'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("txt1").value = genData;

    //Job / Rank Level
  var listData = [
    'EXECUTIVE LEVEL 1',
    'EXECUTIVE LEVEL 2',
    'MANAGER LEVEL 1',
    'MANAGER LEVEL 2'
    ]
    let genData = listData[Math.floor(Math.random() * listData.length)]
    var newdata = document.getElementById("modalField_joblvldsc").value = genData;
    
    
    
      
      //Religion
    var listData = [
      'CATHOLIC',
      'IGLESIA',
      'CHRISTIAN',
      'BORN AGAIN'
      ]
      let genData = listData[Math.floor(Math.random() * listData.length)]
      var newdata = document.getElementById("modalField_religiondesc").value = genData;

      //Suffix
    var listData = [
      'JR.',
      'III',
      'IV',
      'N/A'
      ]
      let genData = listData[Math.floor(Math.random() * listData.length)]
      var newdata = document.getElementById("modalField_suffixdsc").value = genData;


       //Employee
  localStorage.setItem("getRandom", 0);

      let getRand = localStorage.getItem("getRandom");
          var listData = [
                      'Employee Certification',
                  'Employee Default AllowanceI',
                  'Employee Default Deductions',
                    'Employee Default Earnings'
            ]
              let genData = listData[Math.floor(Math.random() * listData.length)]
                   var newdata = document.getElementById("modalField_religiondesc").value = genData;
                        localStorage.setItem("getRandom", parseInt(getRand) + 1);
  
  
  
  
      localStorage.setItem("getRandom", 0);

      var getRand = localStorage.getItem("getRandom"); 
      
      localStorage.setItem("getRandom", parseInt(getRand) + 1);
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
      
                                 document.querySelector("#modalField_religiondesc").value = listData[getRand ];
                      
                                  
                         
        },2000)       