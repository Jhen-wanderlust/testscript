localStorage.setItem("getRandom", 0);

let getRand = localStorage.getItem("getRandom");

let  listData = [
                    'FILIPINO',
                     'CHINESE',
                    'JAPANESE',
                   'PAKISTANI',
                     'ITALIAN',
                    'NIGERIAN',
                      'KOREAN'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#modalField_religiondesc").value = listData[getRand ];
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_diag_save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                            
                                              },2000)

                                 },2000)
                                     
                        },2000)


  },2000)       
                  