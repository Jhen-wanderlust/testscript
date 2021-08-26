
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const leftAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: left;"
               ?
              
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Left Is Working Correctly</span>')
               :
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Left Is Not Working Correctly</span>');
   }

const editorCheck = () =>
        {   
            
            frameContent.find("p").text("JhenyLyn").select();  
               
                setTimeout(() => 
                {
                    $('.mce-i-alignleft').click();
                    leftAlignCheck();
                },5000);
    }
editorCheck();

/*****************
 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const leftAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: left;"
               ?
              
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Left Is Working Correctly</span>')
               :
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Left Is Not Working Correctly</span>');
   }

            setTimeout(() => 
            {
                
                leftAlignCheck();
            },5000);

