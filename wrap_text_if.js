
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const boldCheck = () =>

    {
            let style = frameContent.find("p strong");
            style == "strong;"
                 ?
        
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Bold Function Is Not Working Correctly</span>')
            :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Bold  Function Is Working Correctly</span>');
    } 

const editorCheck = () =>
    {   
           
            frameContent.find("p")
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const boldCheck = () =>

    {
            let style = frameContent.find("p strong");
            style == "strong;"
                 ?
        
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Bold Function Is Not Working Correctly</span>')
            :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Bold  Function Is Working Correctly</span>');
    } 

const editorCheck = () =>
    {   
           
            frameContent.find("p").wrap("<div></div>");
                setTimeout(() => 
                  { 
                     
                     $('.mce-ico mce-i-bold').click();
                     boldCheck();
                  },5000);

                
          

    }
editorCheck();; 
                setTimeout(() => 
                  { 
                     
                     $('.mce-ico mce-i-bold').click();
                     boldCheck();
                  },5000);

                
          

    }
editorCheck();