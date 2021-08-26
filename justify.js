
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const justifyAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: justify;"
               ?
            
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Justify Is Working Correctly</span>')
               :
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Justify Is Not Working Correctly</span>');
   }

const editorCheck = () =>
        {   
            
            frameContent.find("p").text("JhenyLyn").select();  
               
                setTimeout(() => 
                {
                    $('.mce-i-alignjustify').click();
                    justifyAlignCheck();
                },5000); 


    }
editorCheck();

/*****************
 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const justifyAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: justify;"
               ?
            
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Justify Is Working Correctly</span>')
               :
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Justify Is Not Working Correctly</span>');
   }

        setTimeout(() => 
        {
           
            justifyAlignCheck();
        },5000); 