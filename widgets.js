/*****************
 Iframe Working FOr Wysing Editor
*****************/

let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();


const numListCheck = () =>
   {
       let style = frameContent.find("ol li");

       style.length == 0
               ?
       $('.resultsjhen').text('NumList Function Is Not Working Correctly')
               :
       $('.resultsjhen').text('NumList Function Is Working Correctly'); 
   } 

const bullitCheck = ()  => 
    {
        
        let style = frameContent.find("ul li");
         
        style.length == 0 
               ?
       $('.resultsjhen').text('Bullit Function Is Not Working Correctly')
               :
       $('.resultsjhen').text('Bullit Function Is Working Correctly');      

    }


    



const justifyAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: justify;"
               ?
       $('.resultsjhen').text('Align Justify Is Working Correctly')
               :
       $('.resultsjhen').text('Align Justify Is Not Working Correctly');
       
   }



const centerAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: center;"
               ?
       $('.resultsjhen').text('Align Center Is Working Correctly')
               :
       $('.resultsjhen').text('Align Center Is Not Working Correctly');
       
   }


const leftAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: left;"
               ?
       $('.resultsjhen').text('Align Left Is Working Correctly')
               :
       $('.resultsjhen').text('Align Left Is Not Working Correctly');
       
   }
   
   

const rightAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: right;"
               ?
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Right Is Working Correctly</span>')
               :
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Right Is Not Working Correctly</span>');
       
   }


const editorCheck = () =>
   {

       frameContent.find("p").text("JhenyLyn").select();

          setTimeout(() => 
                  {
                      $('.mce-i-alignright').click();
                      rightAlignCheck();
                  },5000);
                  
                  
          setTimeout(() => 
                  {
                      $('.mce-i-alignleft').click();
                      leftAlignCheck();
                  },15000);
                  
                  
          setTimeout(() => 
                  {
                      $('.mce-i-aligncenter').click();
                      centerAlignCheck();
                  },25000);
                  
                  
          setTimeout(() => 
                  {
                      $('.mce-i-alignjustify').click();
                      justifyAlignCheck();
                  },35000); 

       

                  setTimeout(() => 
                  {
                      $('.mce-i-bullist').click();
                      bullitCheck();
                  },45000);     

                  
          setTimeout(() => 
                  {
                      $('.mce-i-numlist').click();
                      numListCheck();
                  },55000);     
                  
                  
                  
                  
                  

   }
editorCheck();