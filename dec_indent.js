
/*****************
 Increase Indent JS + TP Validation
*****************/


let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const IncreaseIndentCheck = () =>
    {
        
        let style = frameContent.find("p").attr("style");
        
        style == "padding-left: 30px,padding-left: 60px;"
                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Increase Indent Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Increase Indent Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            IncreaseIndentCheck();
        },5000);   


/*****************
 Decrease Indent JS + TP Validation
*****************/


let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const DecreaseIndentCheck = () =>
    {
        
        let style = frameContent.find("p").attr("style");
        
        style == "padding-left: 30px;"
                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Decrease Indent Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Decrease Indent Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            DecreaseIndentCheck();
        },5000);   