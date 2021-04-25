function One(a){
   
    const btn = document.getElementById('btn'); //.addEventListener('click', () => {
        var txt = document.getElementById('txt');
        alert(parseInt(txt.value));
        if(typeof(txt.value) == 'NaN'){
            alert('Введите целое число');
            return;
        };
         let loadUrl = 'https://jsonplaceholder.typicode.com/users/' + txt.value + '/todos';                                                      
         fetch(loadUrl)
         //fetch('https://jsonplaceholder.typicode.com/users/3/todos')
            .then((response) => {
                console.log('response',response);
                const result = response.json();
                console.log('result',result);
                return result;
            })
            .then((data) => {console.log(data[0],createUL(data));

            })
            .catch(() => {console.log('error');
       // })
    })
}
function createUL(data){
    let headList=document.getElementsByTagName('h2')[0].innerHTML += txt.value;
    var body = document.body;
    //alert(data.length);
    for(let i= 0; i<data.length; i++){
        var ul = document.createElement('ul');
      var text ='title:' +  data[i].title; 
      text= 'id:' + data[i].id + ' ' + text;
     // alert(data[i].completed);     
      var li = document.createElement('li');
      if(data[i].completed){li.style.setProperty("text-decoration", "line-through")}
      if(text == null || text == ''){
        break;
      }
      li.textContent = text;
      ul.appendChild(li);
      body.appendChild(ul)
    } 
    }
  
  
  
