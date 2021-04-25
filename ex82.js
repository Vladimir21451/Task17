
   
   // const data=[{"year":2017,"sales":{"q1":45228,"q2":76587,"q3":71781,"q4":30343}},{"year":2018,"sales":{"q1":49314,"q2":29954,"q3":81801,"q4":57321}},{"year":2019,"sales":{"q1":64610,"q2":62061,"q3":61607,"q4":45938}}]
   // console.log(data);
   //let xhr = new  XMLHttpRequest();
   var response = {};
   document.getElementById('btnOnload').addEventListener('click',function(){
       let xhr = new  XMLHttpRequest();
       xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440');

       //Добавляем обработчик ответа сервера
       xhr.onload = function(){
           if(xhr.status !== 200){  //Http ошибка

            console.log('Статус ответа', xhr.status);
            }
            else{

                //Парсим и выводим ответ сервера
                response = JSON.parse(xhr.response);
                console.log('Результат', response);
                let selYear =document.getElementById('select').selectedIndex;//выбранный элеаент списка(год)
                console.log(response[selYear]); 
                let tbl = document.getElementById('tbl');
               // alert(response[selYear].sales.q2);
                for (let i = 0; i < 4; i++){
                    let resp = "";
                   switch(i){
                       case 0:
                           resp = response[selYear].sales.q1;
                           break;
                       case 1:
                         resp = response[selYear].sales.q2; 
                         break;
                        case 2:
                            resp = response[selYear].sales.q3;
                            break;
                        case 3:
                            resp = response[selYear].sales.q4; 
                            break;    
                   }
                    document.getElementById(i).innerHTML = resp;
                }
               // var response = JSON.parse(xhr.response);
               //console.log(response[0]);
               //console.log(response[year]);
            }
       };
       //Добавляем обработчик процесса загрузки
       xhr.onprogress=function(event){
            console.log();
       }
       xhr.send();
      
   })
   //xhr.send();
   
