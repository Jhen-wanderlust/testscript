$(function(){
      
  
        let all_numbers = [],
   all_selected_numbers = [];


/***************
 ADDING 90 NUMBERS
***************/
      
      
    for(let count = 1; count < 91; count++) 
    {
      
      $('#tabella').append(`<span class="animated zoomIn" style="animation-delay: 0.${count}s ;"> ${count} </span>`);
      all_numbers.push(count);
      
    }  
    
/***************
     AUTORUN
***************/    

    const autorun = () =>
    {
        setInterval(function ()
        {
          
          $('.estrai-numero').click();
        
        },5000);
        
        
    }
    
    $('.autorun').click(function(){autorun();})
    
/***************
EXTRACTING NUMBER
***************/    
    
    $('.estrai-numero').click(function()
    {
        
       if(all_numbers.length == 0)
       {
           $('.estrai-numero').fadeOut();
       }      
       
       $('.extracted-number').fadeOut(1000,function(){
       
         let selected_number = all_numbers[Math.floor(Math.random() * all_numbers.length)]; // selecting a random number from array we have amde before
         $('.extracted-number').text(selected_number);
         $('.extracted-number').fadeIn();
         
         let remove = all_numbers.indexOf(selected_number); // getting the position of randomly selected number because we need the position to remove it
                      all_numbers.splice(remove,1); // Now removing that number which is selected from the array so this number will never repeat again
                      all_selected_numbers.push(selected_number); // I have made another array where i store all selected numbers

/***************
 CHANGING STYLE FOR SELECTED NUMBERS
***************/                 

             
         $('span').each(function()
         {
            
            let check = all_selected_numbers.includes(parseInt($(this).text()));
            
            (check) ? $(this).addClass('found') : false 
         });     
           
       });
       
    });
    
  });