let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const boldItalicCheck = () =>
   {
       
       let validation = frameContent.find("p").children("strong").children("em").length;       
       validation == 1
         ?
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Bold & Italic Is Working Correctly</span>')
         :
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Bold  & Italic Not Working Correctly</span>');
       
   }


   setTimeout(() => 
                  {
                    boldItalicCheck();
                  },25000);

boldItalicCheck();


/*****************
 JS + TP Validation
*****************/


let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();

const italicCheck= () =>
   {
       
       let em = frameContent.find("p").children("em").length;       
       em == 1
         ?
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Italic Is Working Correctly</span>')
         :
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Italic Not Working Correctly</span>');
       
   }


const boldCheck= () =>
   {
       
       let bold = frameContent.find("p").children("strong").length;       
       bold == 1
         ?
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Bold Is Working Correctly</span>')
         :
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Bold Not Working Correctly</span>');
       
   }


const boldItalicCheck = () =>
   {
       
       let validation = frameContent.find("p").children("strong").children("em").length;       
       validation == 1
         ?
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Bold & Italic Is Working Correctly</span>')
         :
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Font Style Bold  & Italic Not Working Correctly</span>');
       
   }
   

          setTimeout(() => 
                  {
                    italicCheck();
                  },5000);    
                  
          setTimeout(() => 
                  {
                    boldCheck();
                  },15000);    
                  
          setTimeout(() => 
                  {
                    boldItalicCheck();
                  },25000);