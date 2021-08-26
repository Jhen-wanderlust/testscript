    //Piece Rate
    localStorage.setItem("get_data1", 0);
    localStorage.setItem("get_data2", 0);
    localStorage.setItem("get_data3", 0);
    let getRand = localStorage.getItem("get_data1");
    let getRand2 = localStorage.getItem("get_data2");
    let getRand3 = localStorage.getItem("get_data3");

    let  listData = [
                'Box-1',
                'Scrap-1',
                'Per Trip',
                'Box-2',
                'Scrap-2',
                'Box-3',
                'Scrap-3',
                'Box-4',
                'Scrap-4',
                'Box-5',
                'Scrap-5',
                'Box-6',
                'Scrap-6'
                
                    ]
    
    setTimeout( () =>
    
      { 
    
              document.querySelector('#add_btn').click();
              setTimeout(() => 
    
                            { 
                               document.querySelector("#txtdesc").value = listData[getRand];
                               val1 = document.querySelector("#txtdesc").value; 
                               if (val1 == "undefined") {
                                 document.querySelector("#btn_close").click();
                               }
                               else {
                                 ;(function() {
                                  
                                      //amount
                                      var NumArray = [
                                        '20',
                                        '50',
                                        '30',
                                        '70',
                                        '60',
                                        '90',
                                        '300'
                                      ];
                                      var randomNumber = NumArray[Math.floor(Math.random()*NumArray.length)]
                                       document.getElementById("txtamount").value = randomNumber;
    
                                   })();
                                              ;(function() {
    
                                                // TaxClass
                                                      var TaxData = [
                                                        'BAS',
                                                        'REG',
                                                        'SUP',
                                                        'NT',
                                                        'BEN'
                                                      ]
                                                      let genData = TaxData[Math.floor(Math.random() * TaxData.length)]
                                                       document.getElementById("txtclass").value = genData;
    
    
                                            })();
    
    
    
                               setTimeout(() => 
    
                                     { 
    
                                         document.querySelector('#btn_Save').click();
                                         setTimeout(() => 
    
                                                  {
    
                                                    document.querySelector('.ajs-button.print').click();
                                                    localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                          if (val1 === val1) // for existing data
                                                          setTimeout(() =>   {
                                                            document.querySelector("#btn_close").click();
                                                          },2000)
                                                  },2000)
    
                                     },2000)
                               }     
                            },2000)
    
    
      },6000)   