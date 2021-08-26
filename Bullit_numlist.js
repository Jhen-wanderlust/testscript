
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const numListCheck = () =>
   {
       let style = frameContent.find("ol li");

       style.length == 0
       ?
            
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Numbered List Is Working Correctly</span>')
       :
      $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Numbered List Is Not Working Correctly</span>');
   } 


   setTimeout(() => 
{
    $('.mce-i-numlist').click();
    numListCheck();
},5000);     



/**********JS and TP validation */

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();



const bullitCheck = ()  => 
    {
        
        let style = frameContent.find("ul li");
         
        style.length == 0 
        ?
            
        $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Bullit List Is Working Correctly</span>')
        :
        $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Bullit List Is Not Working Correctly</span>');  

    }


setTimeout(() => 
{
    $('.mce-i-bullist').click();
    bullitCheck();
},5000);     


