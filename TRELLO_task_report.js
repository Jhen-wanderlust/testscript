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
    var table = '<table id="myTable" ><thead><th>Task Name</th><th>Number of Task</th><th>EDC</th></th><th>Remarks</th><th>Testers</th></thead> <tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td class="numresult">'+myarray[i][1]+'</td><td><input type="date" id="start" name="trip-start"value="0000-00-00" min="2020-01-01" max="2025-12-31"></td><td><input type="text" id="name" name="name" required minlength="40" maxlength="40" size="40"></td><td><select id="tester-select" style="color:blue"> <option value=""></option> <option value="1">Jhen</option> <option value="2">Chelle</option> <option value="3">Julina</option> <option value="4">Hannah</option> <option value="5">Duane</option> <option value="6">James</option><option value="7">James and Duane</option><option value="8">Chelle and Julina</option><option value="8">Jhen and Hannah</option><option value="8">Programmer</option></select></td></tr>';
    };
    
 

 
    var w = window.open("link_scrapper"); 
w.document.write(table);

}
make_table() 


//Cards per List in Trello

var s = document.querySelectorAll(".list-card-title.js-card-name");
var t = document.querySelectorAll(".label-text");

var myarray = []   

for (var i=0; i<s.length; i++){

var Cards = s[i].innerHTML;
var text = Cards.replace(/\d+/g, '');
var cleantext = text.replace('#', '');
var label = t[i].innerHTML;

myarray.push([cleantext,label]);

};


function make_table() {
    var table = "<table ><thead><th>Module Name</th><th>Testers</th></thead> <tbody>";
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td class="numresult">'+myarray[i][1]+'</td></tr>';
        };
    
 

 
    var w = window.open("link_scrapper"); 
w.document.write(table);

}
make_table() 



//Cards per List in Trello with descriptions


var myarray = [] 
c = document.querySelectorAll(".list-card.js-member-droppable.is-due-complete.ui-droppable");

setTimeout(() => {
for (var i=0; i<c.length; i++){

       var cards = c[i].click();
         
      
       var d = document.querySelector(".current.markeddown.hide-on-edit.js-desc.js-show-with-desc p").innerText;
       console.log(d);

            setTimeout(() => {
             document.querySelectorAll(".icon-md.icon-close.dialog-close-button.js-close-window")[0].click();
            }
                                                    
            ,3000);

myarray.push([cards]);

};

}
                                                    
,3000);

//Cards per List in Label order

var s = document.querySelectorAll(".list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable");


var myarray = []   

for (var i=0; i<s.length; i++){

    var Cards = s[i].innerText;
    var text = Cards.replace("\n", ' ');
    var cleantext = text.split('\n')
    


myarray.push([cleantext]);

};


function make_table() {
    var table = "<table ><thead><th>Over All List with Timeline</th></thead> <tbody>";
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td></tr>';
        };
    
 

 
    var w = window.open("link_scrapper"); 
w.document.write(table);

}
make_table() 


//on trello


var s = document.querySelectorAll(".list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable")[0];



    var Cards = s.innerText;
    var text = Cards.replace("\n", ' ');
    var cleantext = text.split('\n')

console.log(cleantext);

// on td
var s = document.getElementsByTagName("td")[0];


var Cards = s.innerText;
var text = Cards.replace(",", ' ');
var cleantext = text.split(',')

console.log(cleantext);




