
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const italicCheck = () =>
    {
         let style = frameContent.find("p + em");
           style == "em;"
               ?
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Italic Function Is Not Working Correctly</span>')
               :
               $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Italic Function Is Working Correctly</span>');
      }

const editorCheck = () =>
        {   
            
            frameContent.find("p").text("JhenyLyn");   
           
             setTimeout(() => 
              {
                 $(".mce-ico mce-i-italic").click();
                 italicCheck();
              },5000);


    }
editorCheck();