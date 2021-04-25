function analisArr(a){
  // alert('1' + ' ' + localStorage.getItem('item'));
   if (localStorage.getItem('item') !== null) {
   mydata = JSON.parse (localStorage.getItem ('item'));
  createUL(mydata);
 }  
var txt1=document.getElementById('txt1');
txt1= parseInt(txt1.value);
//alert(txt1);
if(txt1 !== txt1)
{alert('Номер страницы вне диапазона от 1 до 10');
return;
}
else if( txt1 > 10 || txt1 < 1) 
   {alert('Номер страницы вне диапазона от 1 до 10');
   return;
}
var txt2=document.getElementById('txt2');
txt2= parseInt(txt2.value);
//alert(txt2);
if(txt2 !== txt2)
{alert('Лимит вне диапазона от 1 до 10');
return;
}
else if( txt2 > 10 || txt2 < 1) 
   {alert('Лимит вне диапазона от 1 до 10');
   return;
    }
    let loadUrl = 'https://picsum.photos/v2/list?page=' + txt1 +'&limit=' + txt2;
    fetch(loadUrl)
         .then((response) => {
           console.log('response',response);
           const result = response.json();
           console.log('result',result);
           return result;
       })
       .then((data) => {console.log(data),createUL(data);
        localStorage.setItem('item', JSON.stringify(data));
        //let mydata = JSON.parse (localStorage.getItem ('item'));
       // alert('40'+ ' ' + mydata);
       })
       .catch(() => {console.log('error');
  // })
})
  }
   
   function createUL(data){
      for(let i= 0; i<data.length; i++){
          var ul = document.createElement('ul');
        var text ='author' +  data[i].author; 
        text= 'url:' + data[i].url + ' ' + text;
       // alert(data[i].completed);     
        var li = document.createElement('li');
        //if(data[i].completed){li.style.setProperty("text-decoration", "line-through")}
        if(text == null || text == ''){
          break;
        }
        li.textContent = text;
        ul.appendChild(li);
        document.body.appendChild(ul)
      } 
    }
    window.onload = init();
    function init(){
     // alert('2' + ' ' + localStorage.getItem('item'));
      if (localStorage.getItem('item') !== null) {
      mydata = JSON.parse (localStorage.getItem ('item'));
     // alert('5' + typeof(mydata));
     createUL(mydata);
    }
    }
  let button = document.getElementById('butn').addEventListener('click',()=>{
    window.localStorage.clear();
    window.location.reload;
  })
