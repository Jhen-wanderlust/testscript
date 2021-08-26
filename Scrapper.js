
var x = document.querySelectorAll(".mendiv a");
var myarray = []   //assigning them to the variable x. Then we create an array variable

//loop over all the “a” elements in x, and for each element, we try to find the text content of the element and the link.
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim(); // text content, we replace the white space with single spaces and trim the text,
var cleanlink = x[i].href;
myarray.push([cleantext,cleanlink]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("link_scrapper"); // window using “window.open()” and write the HTML table to that window using “document.write()”.
w.document.write(table); 
}
make_table()  //make the table using the function “make_table()”. 

//This creates a variable, table, with the beginnings of a HTML table and the table headers. We then use a for loop to add table rows containing the link text and hyperlinks.


//Header
var GetText = document.querySelectorAll('#datatable thead tr th');
var myarray = []
  for (var i = 0; i < GetText.length; i++) { // length, Sets or retrieves the number of objects in a collection.
    if (GetText[i].matches('.header')) {  //Returns true if matching selectors against element's root yields element, and false otherwise.
        myarray.push(GetText[i].textContent);
    }
   
  };

  function make_table() {
    var table = '<table><thead><th>Header</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i] +'</td></tr>';
    };
 
    var w = window.open(""); // window using “window.open()” and write the HTML table to that window using “document.write()”.
w.document.write(table); 
}
make_table()  




var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].onclick;
myarray.push([cleantext,cleanlink]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()


var x = document.querySelectorAll("#ui-id-14 > div.searchable_resultcontainer > table > tbody > tr:nth-child(2) > td.searchable_td > button").click();

//Reset All
var x = document.querySelector("#pager_default_delete");
for (var i=0; i<x.length; i++){
var clickAll = x[i].click();
};

setTimeout(() => { document.getElementById("delete_btn").click(); },3000);
setTimeout(() => { document.querySelector('.ajs-button.print').click(); },6000);
setTimeout(() => { document.querySelectorAll('.ajs-button.print')[1].click(); },9000);



//datatable payroll


var x = document.querySelectorAll("#datatable tbody tr td");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].id;
myarray.push([cleantext,cleanlink]);
};
function make_table() {
    var table = '<table id=123><thead><th>Name</th><th>ID</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()

// masterfile Textbox

var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].onclick;
myarray.push([cleantext,cleanlink]);
};
function make_table() {
    var table = '<table id=123><thead><th>Name</th><th>ID</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()

//trello scrapper

var x = document.querySelectorAll(".list-header-name-assist.js-list-name-assist");
var s = document.querySelectorAll(".list-header-num-cards");
var myarray = []   

for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim(); 
var Cards = s[i].textContent;
var cleanCards = Cards.replace('cards', ' tasks'); 
 var FinalcleanCards = Cards.replace('card', ' task'); 
myarray.push([cleantext,FinalcleanCards]);

};


function make_table() {
    var table = '<table><thead><th>Task Name</th><th>Number of Task</th><th>EDC</th></th><th>Remarks</th><th>Testers</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td class="numresult">'+myarray[i][1]+'</td><td><input type="date" id="start" name="trip-start"value="0000-00-00" min="2020-01-01" max="2025-12-31"></td><td><input type="text" id="name" name="name" required minlength="30" maxlength="30" size="30"></td><td><select id="tester-select" style="color:blue"> <option value=""></option> <option value="1">Jhen</option> <option value="2">Chelle</option> <option value="3">Jolina</option> <option value="4">Hannah</option> <option value="5">Duane</option> <option value="6">James</option><option value="7">James and Duane</option><option value="8">Chelle and Jolina</option></select></td></tr>';
    };
 
  
    var w = window.open("link_scrapper"); 
w.document.write(table);

}
make_table() 


 