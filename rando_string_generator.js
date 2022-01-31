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
		var elem = document.getElementById("txt_info_itmdsc").value = random;

    
         // insert random string to the Description field
		var elem = document.getElementById("txtcusdsc").value = random;
		
    })();
    
    // EWT CODE


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
		var atc_code = randomString(10);
		
		// insert random string to the code field
		var elem = document.getElementById("txt_info_ewtcde").value = random;
        var two = document.getElementById("txt_info_ewtrte").value = "2";
		var three = document.getElementById("txt_info_atccde").value = atc_code;
        var four = document.getElementById("txt_info_taxtyp").value = "Sales"; // js select function
		
	})();



	// Inventory transaction Type 


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
		var atc_code = randomString(10);
		
		// insert random string to the code field
		var elem = document.getElementById("txt_info_trntypcde").value = random;
		var three = document.getElementById("txt_info_trntypdsc").value = atc_code;
        var four = document.getElementById("txt_info_trncde").value = "ADJ"; // js select function
		
	})();

	
	//Customer


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
		var elem = document.getElementById("txtcusdsc").value = random;
		
        var four = 	document.getElementById("txtsleman").value = "Addy Lim"; // js select function
		
	})();

	//memotype


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
		var elem = document.getElementById("txt_memtypdsc").value = random;
		
        var four = 	document.getElementById("txt_trantype cla_input").value = "Receivables"; // js select function
		
	})();

	// EVAT CODE


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
	var atc_code = randomString(10);
	
	// insert random string to the code field
	var elem = document.getElementById("txt_info_evatcde").value = random;
	var two = document.getElementById("txt_info_evatrte").value = "2";
	var three = document.getElementById("txt_info_atccde").value = atc_code;
	var four = document.getElementById("txt_info_taxtyp").value = "Sales"; // js select function
	
})();
// Supplier 



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
	var elem = document.getElementById("txtcusdsc").value = random;
	
	var four = 	document.getElementById("txttrmcde").value = "CASH"; // js select function
	
})();
// vatcode
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
	var atc_code = randomString(10);
	
	// insert random string to the code field
	var elem = document.getElementById("txt_info_taxcde").value = random;
	var three = document.getElementById("txt_info_taxper").value = atc_code;
	var four = document.getElementById("txt_info_taxtyp").value = "Sales"; // js select function
	
})();


// type of advances
;(function() {
	var randomString = function() {
		
		var text = "";
	
		var possible = [
			'',
			'Special',
			'Dynamic',
			'Simple',
			'Great',
			'Better',
			'Stronger',
			'Stylish',
			'Flawless',
			'Envied',
			'Strong',
			'Sucessful',
			'Grow',
			'Innovate',
			'Global',
			'Knowledgable',
			'Unique',
			'Trusted',
			'Efficient',
			'Reliable',
			'Stable',
			'Secure',
			'Sofisticated',
			'Evolving',
			'Colorful',
			'Admirable',
			'Sexy',
			'Trending',
			'Shine',
			'Noted',
			'Famous',
			'Inspiring',
			'Important',
			'Bigger',
			'Stylish',
			'Expand',
			'Proud',
			'Awesome',
			'Solid'
			];
		
		for(var i = 0; i < length; i++) {
		
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		
		}
		
		return text;
	}

	// random string length
	var random = randomString();
	// insert random string to the code field
	 document.getElementById("txt_advtypcde").value = random;
	 // js select function
	
})();



// 

var words = [
    '',
    'Special',
    'Dynamic',
    'Simple',
    'Great',
    'Better',
    'Stronger',
    'Stylish',
    'Flawless',
    'Envied',
    'Strong',
    'Sucessful',
    'Grow',
    'Innovate',
    'Global',
    'Knowledgable',
    'Unique',
    'Trusted',
    'Efficient',
    'Reliable',
    'Stable',
    'Secure',
    'Sofisticated',
    'Evolving',
    'Colorful',
    'Admirable',
    'Sexy',
    'Trending',
    'Shine',
    'Noted',
    'Famous',
    'Inspiring',
    'Important',
    'Bigger',
    'Stylish',
    'Expand',
    'Proud',
    'Awesome',
    'Solid'
    ];
	
	function randomWord(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}
	
	for(var x=0; x<20; x++){
		
		text += (randomWord(words));
	
	}
	document.getElementById("txt_advtypcde").value = text;
	

    
  ;(function() {
	var randomString = function(length) {
		var text = "";
		var words = [
			'',
			'Special',
			'Dynamic',
			'Simple',
			'Great',
			'Better',
			'Stronger',
			'Stylish',
			'Flawless',
			'Envied',
			'Strong',
			'Sucessful',
			'Grow',
			'Innovate',
			'Global',
			'Knowledgable',
			'Unique',
			'Trusted',
			'Efficient',
			'Reliable',
			'Stable',
			'Secure',
			'Sofisticated',
			'Evolving',
			'Colorful',
			'Admirable',
			'Sexy',
			'Trending',
			'Shine',
			'Noted',
			'Famous',
			'Inspiring',
			'Important',
			'Bigger',
			'Stylish',
			'Expand',
			'Proud',
			'Awesome',
			'Solid'
			];
		
		
		for(var i = 0; i < length; i++) {
		
			text += words[Math.floor(Math.random() * words.length)];
		
		}
		
		return text;
	}

	// random string length
	var random = randomString();
	// insert random string to the code field
	var newdata = document.getElementById("txt_advtypcde").value = random;
	 // js select function
	
})();


var textArray = [
    '20,000',
	'50,000',
	'30,000',
	'70,000',
	'60,000',
	'90,000',
    '30,000'
];
var randomNumber = Math.floor(Math.random()*textArray.length);
var newdata = document.getElementById("txt1").value = randomNumber;

//pick random string from array javascript
var listData = [
	'milk',
	'coriander',
	'cucumber',
	'eggplant'
	]
	let genData = listData[Math.floor(Math.random() * listData.length)]
	var newdata = document.getElementById("txt1").value = genData;






//random dates



localStorage.setItem('data7', 0)


;(function() {
  var randomString = function(length) {
    
    var text = "";
  
    var possible = "123456789";
    
    for(var i = 0; i < length; i++) {
    
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    
    return text;
  }

  // random string length
  var random = 0 + randomString(1) + '/';
  var ran1 = 1 + randomString(1) ;

  mey = random.toString();
  mey1 = ran1.toString();
//separate
var counter = localStorage.getItem('data7')

  dte = [

    mey + mey1+'/2019',
    mey + mey1  + '/2020',
    mey + mey1 +'/2021',
    mey + mey1 +'/2022'
  ]
  
  
  var today = new Date(dte[counter]);
  
  
  counter++
  localStorage.setItem('data7', counter)
  
  
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate()+1);
  me = tomorrow.toLocaleDateString();
  change = me.replace('/','-'); 
  change1 = change.replace('/','-'); 
  
  })();
  


//fire
document.querySelector('#txt_info_trndte').value = change1;

