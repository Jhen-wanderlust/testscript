
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const boldCheck = () =>

    {
            let style = frameContent.find("p strong");
            style == "strong;"
                 ?
            $('.resultsjhen').text('Bold Function Is Not Working Correctly')
                 :
            $('.resultsjhen').text('Bold  Function Is Working Correctly'); 
        } 

const editorCheck = () =>
        {   
            
            frameContent.find("p").text("JhenyLyn").select();  
               
                setTimeout(() => 
                  {
                     $('.mce-ico mce-i-indent').click();
                      boldCheck();
                  },5000);

    }
editorCheck();

/*****************
 JS + TP Validation
*****************/

