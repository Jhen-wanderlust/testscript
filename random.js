

// Then to print
embeddedPdf.contentWindow.print()
var me = document.getElementById("iframe")
me.contentWindow.print();


document.getElementsByClassName("save")[0].click(); //click a button 
document.getElementById('add_btn').click();
//if exist or not

if(document.getElementById("add_button")){
    alert("Element exists");
} else {
    alert("Element does not exist");
}

// use selenium for accepts ok btn on alert 

var array = [12, 5, 8, 3, 17];

var el = 8; //Element to be searched
var flag = 0;  // Initially 0 - Not found

for(var i=0; i<array.length; i++) {
	if(el == array[i])
		flag = 1;
}

//Check if flag value changed.
if(flag == 1)
	console.log('Element Found');
else
	console.log('Element Not Found');

	//includes() method,this method returns only true or false instead of index number, as you can see here:


	
	
	let  Apple = document.getElementById("iframe")  
	
	var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
    alert(fruits.includes("Banana")+" " + " Banana exists"); // Outputs: true
    alert(fruits.includes("Coconut")); // Outputs: false
    alert(fruits.includes("Orange")); // Outputs: true
	alert(fruits.includes("Cherry")); // Outputs: false


	
	var array = [12, 5, 8, 3, 17];

var el = 8; //Element to be searched
var flag = 0;  // Initially 0 - Not found

for(var i=0; i<array.length; i++) {
	if(el == array[i])
		flag = 1;
}

//Check if flag value changed.
if(flag == 1)
	alert('Element Found');
else
	alert('Element Not Found');


	var findme = ["Saab", "Volvo", "BMW"];
	document.getElementById("demo").innerHTML = findme[0];
	
	
		alert(findme.includes("Opel")+" " + "Opel exists"); // Outputs: true
		alert(findme.includes("Volvo")); // Outputs: false
		alert(findme.includes("Orange")); // Outputs: true
		alert(findme.includes("Cherry")); // Outputs: false

	var findme = ["Edit", "View", "Delete"];
	
	if(document.getElementById("edit_btn").innerHTML = findme[0]){
		alert(findme.includes("Edit")+" " + "exists"); // O
	} else {
		alert(findme.includes("Edit")+" " + "does not exists"); 
	}
	
	var findme = ["Edit", "View", "BMW"];
	findme[0] = "Edit";
	findme[1] = "View";
	
	
	if(document.getElementById("edit_btn").innerHTML = findme[0]){
		alert("Element  exists ");
	} else {
		alert("Element does not exist");
	}


	if(document.getElementById("inquire_btn").innerHTML = findme[1]){
		alert("Element exists");
	} else {
		alert("Element does not exist");
	}

    var i = (document.getElementById("edit_btn")[0])

	if(document.getElementById("edit_btn")[0]){
		alert("Element exists"); 
	} else {
		alert("Elementdoes not exists");
	}
	


val1 = document.getElementById("modalField_deptdescription").value;   //check if textbox has text or null

 if(val1=="SUP"){
  alert("Selected");
 } else {
alert("Not Selected");
}

//Dropdownlist validation: Change the number : [4] , Dont forget the change and check the id of the element. 
var drop = document.querySelectorAll("#cbo_taxclass option")[4].hasAttribute("selected");
if (drop)
     {
    alert("Validated"); // true
	   } else {
	  alert("Not Validated"); // false
	  }


//after Execute JS / Get alert text with validation contains : Validated and last step would be accept Alert.






	function myFunction() {
		var text;
		
	  
		switch(fruits) {
		  case "Banana":
			text = "Banana is good!";
		  break;
		  case "Orange":
		  text = "I am not a fan of orange.";
		  break;
		  case "Apple":
		  text = "How you like them apples?";
		  break;
		  default:
		  text = "I have never heard of that fruit...";
		}
		document.getElementById("demo").innerHTML = text;
	  }


	  if(document.getElementById("edit_btn"))
	  {
		
		$("<div>Element exists</div> ").dialog();
	  } else {
		$("<div>Element does not exists </div>").dialog();
	  }
	  
      if(document.getElementById("edit_btn"))
	  {
	  $("<div></div>").html("Element exists").dialog(); 
	} else {
		$("<div></div>").html("Element does not exists").dialog(); 
	}

// leave benifeciaries
var Hours = document.getElementById("txt_avail").value;
var balance = document.getElementById("txt_bal").value;


if (Hours === balance)
{
	alert("Matched")
} else {
		alert("Not Matched")
	   }


	   