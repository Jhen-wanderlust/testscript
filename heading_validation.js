
/*****************
H1 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const h1Check = () =>
    {
        
        let h1 = frameContent.find("body").children("h1").length;       
        h1 == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header1 Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header1 Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            h1Check();
        },5000);   




/*****************
H2 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const h1Check = () =>
    {
        
        let h2 = frameContent.find("body").children("h2").length;       
        h2 == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header2 Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header2 Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            h1Check();
        },5000);   


/*****************
H3 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const h1Check = () =>
    {
        
        let h3 = frameContent.find("body").children("h3").length;       
        h3 == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header3 Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header3 Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            h1Check();
        },5000);   

/*****************
H4 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const h1Check = () =>
    {
        
        let h4 = frameContent.find("body").children("h4").length;       
        h4 == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header4 Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header4 Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            h1Check();
        },5000);   


        
/*****************
H5 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const h1Check = () =>
    {
        
        let h5 = frameContent.find("body").children("h5").length;       
        h5 == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header5 Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header5 Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            h1Check();
        },5000);   


/*****************
H6 JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const h1Check = () =>
    {
        
        let h6 = frameContent.find("body").children("h6").length;       
        h6 == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header6 Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Sample Header6 Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            h1Check();
        },5000);   


        /*****************
Undo JS + TP Validation
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const UndoCheck = () =>
    {
        
        let undo = frameContent.find("body").children("p").length;         
        undo == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Undo Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Undo Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            UndoCheck();
        },5000);   


/*****************
Redo JS + TP Validation
*****************/


let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const redoCheck = () =>
    {
        
        let redo = frameContent.find("body").children("p").length;         
        redo == 1

                ?
            
                $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">redo Is Working Correctly</span>')
                :
            $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">redo Is Not Working Correctly</span>');
    }
        setTimeout(() => 
        {
            redoCheck();
        },5000);   



