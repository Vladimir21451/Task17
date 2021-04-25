function reverseStr(str){

    const result = prompt("Добро пожаловать! Назовите, пожалуйста, Ваше имя»",'');
    //alert(new Date);
    let now = new Date();
   // alert(localStorage.getItem('name'));
    if(result === null||result ===""){
        alert('Имя не введено. Попробуйте ещё раз');
        return;
    }
    if(localStorage.getItem('name') !== result){
        localStorage.setItem('name',result);
        localStorage.setItem('date',now);
        alert('Добрый день,' + result + '! Вы у нас впервые');  
       }
       else{
           localStorage.setItem('date','now');
           alert('Добрый день, ' + result + '! Давно не виделись.В последний раз Вы были у нас ' + now)
       }

}
